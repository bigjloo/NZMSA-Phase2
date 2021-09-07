import { ChangeEvent } from "react"
import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import TextField from "@material-ui/core/TextField"
import CameraContainer from "../../MediaCapture/CameraContainer"
import EventDialogStyles from "./EventDialogStyles"

export type EventDialogContentProps = {
  nameInput: string
  descriptionInput: string
  onNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDescriptionInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onAddEvent: () => void
  toggleEventDialogHandler: () => void
}

type EventDialogFormFieldsProps = Pick<
  EventDialogContentProps,
  | "nameInput"
  | "descriptionInput"
  | "onNameInputChange"
  | "onDescriptionInputChange"
>

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
      <EventDialogFormFields
        nameInput={nameInput}
        descriptionInput={descriptionInput}
        onNameInputChange={onNameInputChange}
        onDescriptionInputChange={onDescriptionInputChange}
      />
      <CameraContainer />
      <DialogActions className={classes.dialogActions}>
        <AddEventButton clickHandler={onAddEvent} />
        <CloseEventDialogButton clickHandler={toggleEventDialogHandler} />
      </DialogActions>
    </DialogContent>
  )
}

const EventDialogTitle = () => {
  const classes = EventDialogStyles()
  return <DialogTitle children="Add Event" className={classes.title} />
}

const EventDialogFormFields = ({
  nameInput,
  descriptionInput,
  onNameInputChange,
  onDescriptionInputChange,
}: EventDialogFormFieldsProps) => {
  return (
    <>
      <TextField
        value={nameInput}
        label="Event Name"
        type="text"
        color="secondary"
        onChange={onNameInputChange}
        fullWidth
      />
      <TextField
        value={descriptionInput}
        label="Event Description"
        type="text"
        color="secondary"
        onChange={onDescriptionInputChange}
        fullWidth
      />
    </>
  )
}

const AddEventButton = ({ clickHandler }: ButtonProps) => {
  return (
    <Button children="Add Event" variant="outlined" onClick={clickHandler} />
  )
}

const CloseEventDialogButton = ({ clickHandler }: ButtonProps) => {
  return <Button children="Close" onClick={clickHandler} />
}

export default EventDialogContent
