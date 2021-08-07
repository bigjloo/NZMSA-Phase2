import { ChangeEvent } from "react"

import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"

import EventList from "./EventList"
import CameraContainer from "../MediaCapture/CameraContainer"

export type EventDialogContentProps = {
  nameInput: string
  descriptionInput: string
  openEventDialog: boolean
  onAddEvent: () => void
  toggleDialogHandler: () => void
  toggleHandler: () => void
  onNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDescriptionInputChange: (input: ChangeEvent<HTMLInputElement>) => void
  onRemoveEvent: (index: number) => void
}

const EventDialog = ({
  nameInput,
  descriptionInput,
  openEventDialog,
  onNameInputChange,
  onDescriptionInputChange,
  onAddEvent,
  toggleDialogHandler,
  toggleHandler,
  onRemoveEvent,
}: EventDialogContentProps) => {
  return (
    <Dialog open={openEventDialog} onClose={toggleHandler}>
      <EventList onRemoveEvent={onRemoveEvent} />
      <DialogContent>
        <DialogTitle>Add Event</DialogTitle>
        <TextField
          value={nameInput}
          label="Event Name"
          autoFocus
          type="text"
          fullWidth
          onChange={onNameInputChange}
        />
        <TextField
          value={descriptionInput}
          label="Description"
          fullWidth
          onChange={onDescriptionInputChange}
        />
        <CameraContainer />
        <DialogActions>
          <Button variant="outlined" onClick={onAddEvent}>
            Add Event
          </Button>
          <Button onClick={toggleDialogHandler}>Close</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default EventDialog
