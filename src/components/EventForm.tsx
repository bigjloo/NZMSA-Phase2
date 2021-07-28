import { useRef } from "react";

import { EventFormProps } from "../common/types_interfaces";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const EventForm = (props: EventFormProps) => {
  return (
    <DialogContent>
      <label>
        <TextField label="Event Name" autoFocus type="text" fullWidth />
      </label>
      <label>
        <TextField label="Caption" fullWidth />
      </label>
      <Button variant="outlined" onClick={props.addEvent}>
        Add Event
      </Button>
      <DialogActions>
        <Button onClick={props.toggleHandler}>Close</Button>
      </DialogActions>
    </DialogContent>
  );
};

export default EventForm;
