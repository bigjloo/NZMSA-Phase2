import { ChangeEvent } from "react"
import { uploadFileToAzure } from "../../../api/azureStorageBlob"
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks"
import { setCardImage, setIsCameraOpen } from "../../../store/cameraReducer"
import { toggleEventDialog } from "../../../store/dialogReducer"
import { removeEvent, IEvent, addEvent } from "../../../store/eventReducer"
import { openNotification } from "../../../store/notificationReducer"
import { resetInputFields } from "../../../store/formInputReducer"
import {
  handleNameInputChange,
  handleDescriptionInputChange,
} from "../../../store/formInputReducer"
import Dialog from "@material-ui/core/Dialog"
import EventDialogContent from "./EventDialogContent"
import EventDialogList from "./EventDialogList"

const EventDialogContainer = () => {
  const dispatch = useAppDispatch()

  const events = useAppSelector<IEvent[]>((state) => state.events.events)
  const nameInput = useAppSelector<string>((state) => state.formInput.name)
  const descriptionInput = useAppSelector<string>(
    (state) => state.formInput.description
  )
  const cardImage = useAppSelector<Blob | undefined>(
    (state) => state.camera.cardImage
  )
  const token = useAppSelector<string>((state) => state.user.sasToken!)
  const githubName = useAppSelector<string>((state) => state.user.githubName!)
  const isEventDialogOpen = useAppSelector<boolean>(
    (state) => state.dialog.isEventDialogOpen
  )

  const toggleEventDialogHandler = () => {
    dispatch(toggleEventDialog())
    dispatch(setCardImage(undefined))
    dispatch(setIsCameraOpen(false))
  }

  const onAddEvent = async () => {
    let photoURI = null
    // If user took photo for event:
    // convert and upload to Azure Storage Blob
    if (cardImage) {
      photoURI = await uploadFileToAzure({
        token: token!,
        githubName: githubName!,
        cardImage,
      })
    }
    const eventPayload = {
      name: nameInput,
      description: descriptionInput,
      photoURI,
    }
    dispatch(addEvent(eventPayload))

    dispatch(setCardImage(undefined))
    dispatch(resetInputFields())

    dispatch(
      openNotification({
        message: "Event succesfully added!",
        alertType: "success",
      })
    )
  }

  const onRemoveEvent = (index: number) => dispatch(removeEvent(index))

  const onNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleNameInputChange(event.target.value))
  }
  const onDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleDescriptionInputChange(event.target.value))
  }

  return (
    <Dialog open={isEventDialogOpen} onClose={toggleEventDialogHandler}>
      <EventDialogList events={events} onRemoveEvent={onRemoveEvent} />
      <EventDialogContent
        onAddEvent={onAddEvent}
        toggleEventDialogHandler={toggleEventDialogHandler}
        nameInput={nameInput}
        descriptionInput={descriptionInput}
        onNameInputChange={onNameInputChange}
        onDescriptionInputChange={onDescriptionInputChange}
      />
    </Dialog>
  )
}

export default EventDialogContainer
