import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { openNotification } from "../../store/notificationReducer"
import { resetInputFields } from "../../store/formInputReducer"
import { addEvent } from "../../store/eventReducer"

import uploadFileToBlob, {
  blobToFile,
  azureBlobURL,
} from "../../api/azure-storage-blob"

import EventDialogContent from "./EventDialogContent"
import { setCardImage } from "../../store/cameraReducer"

type EventDialogContentContainerProps = {
  toggleEventDialogHandler: () => void
}

const EventDialogContentContainer = ({
  toggleEventDialogHandler,
}: EventDialogContentContainerProps) => {
  const nameInput = useAppSelector<string>((state) => state.formInput.name)
  const descriptionInput = useAppSelector<string>(
    (state) => state.formInput.description
  )

  const cardImage = useAppSelector<Blob | undefined>(
    (state) => state.camera.cardImage
  )
  const token = useAppSelector<string | undefined>(
    (state) => state.user.sasToken
  )
  const githubName = useAppSelector<string | undefined>(
    (state) => state.user.githubName
  )

  const dispatch = useAppDispatch()

  // Uploads cardImage(user photo) to Azure Storage and
  // adds event to local events state
  const onAddEvent = async () => {
    let fileURI = null
    if (cardImage) {
      // Creates fileName from current datetime
      // and converts cardImage to File type
      const fileName = new Date().toISOString()
      const file = blobToFile(cardImage, fileName)

      const uploadToAzurePayload = {
        file,
        token: token!,
        containerName: githubName!,
      }
      try {
        // Uploads to Azure Storage Blob
        await uploadFileToBlob(uploadToAzurePayload)
        // Upload success. Sets fileURI to name of newly created file
        fileURI = `${azureBlobURL}/${githubName}/${file.name}`
      } catch (err) {
        console.error(err)
      }
    }

    const eventsPayload = {
      name: nameInput,
      description: descriptionInput,
      photoURI: fileURI,
    }
    // Adds new event to local events state
    dispatch(addEvent(eventsPayload))

    // CHANGE IF BREAK SYSTEM !!
    dispatch(setCardImage(undefined))

    dispatch(openNotification("Event succesfully added!"))

    // Resets form input fields after event is added
    dispatch(resetInputFields())
  }

  return (
    <EventDialogContent
      title="Add Event"
      onAddEvent={onAddEvent}
      toggleEventDialogHandler={toggleEventDialogHandler}
    />
  )
}

export default EventDialogContentContainer
