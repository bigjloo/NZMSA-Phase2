import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"

import { EventDialogContentProps } from "../../common/types_interfaces"

const EventDialogContent = (props: EventDialogContentProps) => {
  const {
    nameInput,
    descriptionInput,
    onNameInputChange,
    onDescriptionInputChange,
    onAddEvent,
    toggleDialogHandler,
  } = props

  return (
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
      <DialogActions>
        <Button variant="outlined" onClick={onAddEvent}>
          Add Event
        </Button>
        <Button onClick={toggleDialogHandler}>Close</Button>
      </DialogActions>
    </DialogContent>
  )
}

export default EventDialogContent
