import { EventFormProps } from "../common/types_interfaces";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const EventForm = (props: EventFormProps) => {
  return (
    <DialogContent>
      <h1>Add Event</h1>
      <label>
        <TextField
          inputRef={props.nameRef}
          label="Event Name"
          autoFocus
          type="text"
          fullWidth
        />
      </label>
      <label>
        <TextField inputRef={props.captionRef} label="Caption" fullWidth />
      </label>
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
