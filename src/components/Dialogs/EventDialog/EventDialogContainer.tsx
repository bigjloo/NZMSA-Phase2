import { useAppDispatch, useAppSelector } from "../../../store/storeHooks"
import { setCardImage, setIsCameraOpen } from "../../../store/cameraReducer"
import { toggleEventDialog } from "../../../store/dialogReducer"
import { removeEvent } from "../../../store/eventReducer"
import EventDialog from "./EventDialog"
import { IEvent } from "../../../store/eventReducer"
import { openNotification } from "../../../store/notificationReducer"
import { resetInputFields } from "../../../store/formInputReducer"
import { addEvent } from "../../../store/eventReducer"
import { convertAndUploadFileToAzure } from "../../../api/azure-storage-blob"
import {
  handleNameInputChange,
  handleDescriptionInputChange,
} from "../../../store/formInputReducer"
import { ChangeEvent } from "react"

const EventDialogContainer = () => {
  const events = useAppSelector<IEvent[]>((state) => state.events.events)
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

  const isEventDialogOpen = useAppSelector<boolean>(
    (state) => state.dialog.isEventDialogOpen
  )

  const dispatch = useAppDispatch()

  const toggleEventDialogHandler = () => {
    dispatch(toggleEventDialog())
    dispatch(setCardImage(undefined))
    dispatch(setIsCameraOpen(false))
  }

  const onAddEvent = async () => {
    let photoURI = null

    // If user took photo for event
    if (cardImage) {
      photoURI = await convertAndUploadFileToAzure(
        token!,
        githubName!,
        cardImage
      )
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

  // Removes individual event from local events state
  const onRemoveEvent = (index: number) => dispatch(removeEvent(index))

  const onNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleNameInputChange(event.target.value))
  }
  const onDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleDescriptionInputChange(event.target.value))
  }

  return (
    <EventDialog
      isEventDialogOpen={isEventDialogOpen}
      toggleEventDialogHandler={toggleEventDialogHandler}
      events={events}
      onRemoveEvent={onRemoveEvent}
      onAddEvent={onAddEvent}
      nameInput={nameInput}
      descriptionInput={descriptionInput}
      onNameInputChange={onNameInputChange}
      onDescriptionInputChange={onDescriptionInputChange}
    />
  )
}

export default EventDialogContainer
