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
  onAddEvent: () => void
  toggleEventDialogHandler: () => void
  onNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDescriptionInputChange: (event: ChangeEvent<HTMLInputElement>) => void
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
      <DialogTitle className={classes.title}>Add Event</DialogTitle>
      <TextField
        value={nameInput}
        label="Event Name"
        autoFocus
        type="text"
        fullWidth
        color="secondary"
        onChange={onNameInputChange}
      />
      <TextField
        value={descriptionInput}
        label="Description"
        fullWidth
        color="secondary"
        onChange={onDescriptionInputChange}
      />
      <CameraContainer />
      <DialogActions className={classes.dialogActions}>
        <Button variant="outlined" onClick={onAddEvent}>
          Add Event
        </Button>
        <Button onClick={toggleEventDialogHandler}>Close</Button>
      </DialogActions>
    </DialogContent>
  )
}

export default EventDialogContent
