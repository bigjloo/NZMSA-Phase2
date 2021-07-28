import { useRef } from "react";

import { EventFormProps } from "../types_interfaces.tsx/types";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const EventForm = (props: EventFormProps) => {
  return (
    <FormControl>
      <label>
        <TextField id="standard-basic" label="Event Name" />
      </label>
      <label>
        <TextField label="Caption" />
      </label>
      <Button variant="outlined" onClick={props.addEvent}>
        Add Event
      </Button>
    </FormControl>
  );
};

export default EventForm;
