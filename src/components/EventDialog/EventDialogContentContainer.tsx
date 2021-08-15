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
  const token = useAppSelector<string | undefined>(
    (state) => state.user.sasToken
  )
  const githubName = useAppSelector<string | undefined>(
    (state) => state.user.githubName
  )

  const dispatch = useAppDispatch()

  // Uploads cardImage(user photo) to Azure Storage
  // returns photo URI
  const convertAndUploadFileToAzure = async () => {
    const fileName = new Date().toISOString()
    const file = convertBlobToFile(cardImage!, fileName)
    const uploadToAzurePayload = {
      file,
      token: token!,
      containerName: githubName!,
    }
    try {
      await uploadFileToBlob(uploadToAzurePayload)
      const photoURI = `${azureBlobURL}/${githubName}/${file.name}`
      return photoURI
    } catch (err) {
      console.error(err)
    }
  }

  // Adds new event to local events state
  const onAddEvent = async () => {
    let photoURI = null

    // If user took photo for event
    if (cardImage) {
      photoURI = await convertAndUploadFileToAzure()
    }

    const eventsPayload = {
      name: nameInput,
      description: descriptionInput,
      photoURI,
    }
    dispatch(addEvent(eventsPayload))

    dispatch(setCardImage(undefined))
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
