import { ChangeEvent } from "react"

import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import TextField from "@material-ui/core/TextField"

import CameraContainer from "../../MediaCapture/CameraContainer"
import EventDialogStyles from "./EventDialogStyles"

export type EventDialogContentProps = EventDialogFormProps &
  EventDialogActionsProps

type EventDialogFormProps = {
  nameInput: string
  descriptionInput: string
  onNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDescriptionInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

type EventDialogActionsProps = {
  onAddEvent: () => void
  toggleEventDialogHandler: () => void
}

type ButtonProps = {
  clickHandler: () => void
}

const EventDialogContent = ({
  nameInput,
  descriptionInput,
  onAddEvent,
  toggleEventDialogHandler,
  onNameInputChange,
  onDescriptionInputChange,
}: EventDialogContentProps) => {
  const classes = EventDialogStyles()

  return (
    <DialogContent className={classes.dialogContent}>
      <EventDialogTitle />
      <EventDialogForm
        nameInput={nameInput}
        descriptionInput={descriptionInput}
        onNameInputChange={onNameInputChange}
        onDescriptionInputChange={onDescriptionInputChange}
      />
      <CameraContainer />
      <EventDialogActions
        onAddEvent={onAddEvent}
        toggleEventDialogHandler={toggleEventDialogHandler}
      />
    </DialogContent>
  )
}

const EventDialogTitle = () => {
  const classes = EventDialogStyles()
  const title = "Add Event"

  return <DialogTitle className={classes.title}>{title}</DialogTitle>
}

const EventDialogForm = ({
  nameInput,
  descriptionInput,
  onNameInputChange,
  onDescriptionInputChange,
}: EventDialogFormProps) => {
  const eventNameLabel = "Event Name"
  const eventDescriptionLabel = "Event Description"

  return (
    <>
      <TextField
        value={nameInput}
        label={eventNameLabel}
        autoFocus
        type="text"
        fullWidth
        color="secondary"
        onChange={onNameInputChange}
      />
      <TextField
        value={descriptionInput}
        label={eventDescriptionLabel}
        fullWidth
        color="secondary"
        onChange={onDescriptionInputChange}
      />
    </>
  )
}

const EventDialogActions = ({
  onAddEvent,
  toggleEventDialogHandler,
}: EventDialogActionsProps) => {
  const classes = EventDialogStyles()

  return (
    <DialogActions className={classes.dialogActions}>
      <AddEventButton clickHandler={onAddEvent} />
      <CloseEventDialogButton clickHandler={toggleEventDialogHandler} />
    </DialogActions>
  )
}

const AddEventButton = ({ clickHandler }: ButtonProps) => {
  const addEventButtonText = "Add Event"
  return (
    <Button variant="outlined" onClick={clickHandler}>
      {addEventButtonText}
    </Button>
  )
}

const CloseEventDialogButton = ({ clickHandler }: ButtonProps) => {
  const closeEventDialogButtonText = "Close"
  return <Button onClick={clickHandler}>{closeEventDialogButtonText}</Button>
}

export default EventDialogContent
