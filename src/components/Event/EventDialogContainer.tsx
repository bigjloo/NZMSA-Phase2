import { ChangeEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"

import { toggleEventDialog } from "../../store/dialogReducer"
import { addEvent, removeEvent } from "../../store/eventReducer"
import {
  handleNameInputChange,
  handleDescriptionInputChange,
  resetInputFields,
} from "../../store/formInputReducer"

import EventDialog from "./EventDialog"
import { setCardImage } from "../../store/cameraReducer"

const EventDialogContainer = () => {
  const [nameInput, descriptionInput, openEventDialog, photo] = useAppSelector(
    (state) => [
      state.formInput.name,
      state.formInput.description,
      state.dialog.isEventDialogOpen,
      state.camera.cardImage,
    ]
  )

  const dispatch = useAppDispatch()

  const toggleHandler = () => {
    dispatch(toggleEventDialog())
    dispatch(setCardImage(undefined))
  }

  const onNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleNameInputChange(event.target.value))
  }
  const onDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleDescriptionInputChange(event.target.value))
  }

  const onRemoveEvent = (index: number) => dispatch(removeEvent(index))
  const onAddEvent = () => {
    const payload = {
      name: nameInput,
      description: descriptionInput,
      photo: URL.createObjectURL(photo),
    }
    dispatch(addEvent(payload))
    dispatch(resetInputFields())
  }

  return (
    <EventDialog
      nameInput={nameInput}
      descriptionInput={descriptionInput}
      openEventDialog={openEventDialog}
      onAddEvent={onAddEvent}
      toggleDialogHandler={toggleHandler}
      onNameInputChange={onNameInputChange}
      onDescriptionInputChange={onDescriptionInputChange}
      onRemoveEvent={onRemoveEvent}
      toggleHandler={toggleHandler}
    />
  )
}

export default EventDialogContainer
