import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { openNotification } from "../../store/notificationReducer"
import { resetInputFields } from "../../store/formInputReducer"
import { addEvent } from "../../store/eventReducer"

import uploadFileToBlob, {
  convertBlobToFile,
  azureBlobURL,
} from "../../api/azure-storage-blob"

import EventDialogContent from "./EventDialogContent"
import { setCardImage } from "../../store/cameraReducer"

type EventDialogContentContainerProps = {
  toggleEventDialogHandler: () => void
}

const EventDialogContentContainer = (
  props: EventDialogContentContainerProps
) => {
  const nameInput = useAppSelector<string>((state) => state.formInput.name)
  const descriptionInput = useAppSelector<string>(
    (state) => state.formInput.description
  )

  const cardImage = useAppSelector<Blob | undefined>(
    (state) => state.camera.cardImage
  )
  const token = useAppSelector<string>((state) => state.user.sasToken)
  const githubName = useAppSelector<string>((state) => state.user.githubName)

  const dispatch = useAppDispatch()

  // Uploads cardImage(user photo) to Azure Storage and
  // adds event to local events state
  const onAddEvent = async () => {
    let photoURI = null
    if (cardImage) {
      // Creates fileName from current datetime
      // and converts cardImage to File type
      const fileName = new Date().toISOString()
      const file = convertBlobToFile(cardImage, fileName)

      const uploadToAzurePayload = {
        file,
        token,
        containerName: githubName,
      }
      try {
        // Uploads to Azure Storage Blob
        await uploadFileToBlob(uploadToAzurePayload)
        // Upload success. Sets fileURI to name of newly created file
        photoURI = `${azureBlobURL}/${githubName}/${file.name}`
      } catch (err) {
        console.error(err)
      }
    }

    // Adds new event to local events state
    const eventsPayload = {
      name: nameInput,
      description: descriptionInput,
      photoURI,
    }
    dispatch(addEvent(eventsPayload))

    // Reset cardImage
    dispatch(setCardImage(undefined))

    // Resets form input fields after event is added
    dispatch(resetInputFields())

    dispatch(openNotification("Event succesfully added!"))
  }

  return (
    <EventDialogContent
      title="Add Event"
      onAddEvent={onAddEvent}
      toggleEventDialogHandler={props.toggleEventDialogHandler}
    />
  )
}

export default EventDialogContentContainer
