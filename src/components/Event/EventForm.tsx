import { EventFormProps } from "../../common/types_interfaces";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const EventForm = (props: EventFormProps) => {
  return (
    <DialogContent>
      <DialogTitle>Add Event</DialogTitle>
      <TextField
        value={props.nameInput}
        label="Event Name"
        autoFocus
        type="text"
        fullWidth
        onChange={props.onNameInputChange}
      />
      <TextField
        value={props.descriptionInput}
        label="Caption"
        fullWidth
        onChange={props.onDescriptionInputChange}
      />
      <DialogActions>
        <Button variant="outlined" onClick={props.onAddEvent}>
          Add Event
        </Button>
        <Button onClick={props.toggleDialogHandler}>Close</Button>
      </DialogActions>
    </DialogContent>
  );
};

export default EventForm;
