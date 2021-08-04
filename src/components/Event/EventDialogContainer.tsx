import { ChangeEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"

import { toggleEventDialog } from "../../store/dialogReducer"
import { addEvent, removeEvent } from "../../store/eventReducer"
import {
  handleNameInputChange,
  handleDescriptionInputChange,
  resetInputFields,
} from "../../store/formInputReducer"

import EventDialog from "./EventDialog"

interface AddEventPayload {
  name: string
  description: string
}

const EventDialogContainer = () => {
  const [nameInput, descriptionInput, openEventDialog] = useAppSelector(
    (state) => [
      state.formInput.name,
      state.formInput.description,
      state.dialog.isEventDialogOpen,
    ]
  )

  const dispatch = useAppDispatch()

  const onNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleNameInputChange(event.target.value))
  }

  const onDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleDescriptionInputChange(event.target.value))
  }

  const toggleHandler = () => dispatch(toggleEventDialog())

  const onAddEvent = () => {
    const payload: AddEventPayload = {
      name: nameInput,
      description: descriptionInput,
    }
    dispatch(addEvent(payload))
    dispatch(resetInputFields())
  }

  const onRemoveEvent = (index: number) => dispatch(removeEvent(index))

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
