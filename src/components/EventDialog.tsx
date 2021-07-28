import { useSelector, useDispatch } from "react-redux";
import { toggleDialog } from "../store/dialogReducer";

import EventForm from "./EventForm";
import Dialog from "@material-ui/core/Dialog";
import { RootState, AppDispatch } from "../common/types_interfaces";

const EventDialog = () => {
  const open = useSelector((state: RootState) => state.dialog.isOpen);

  const dispatch = useDispatch<AppDispatch>();

  const toggleHandler = () => {
    dispatch(toggleDialog());
  };

  const addEvent = () => {};

  return (
    <Dialog open={open}>
      <EventForm addEvent={addEvent} toggleHandler={toggleHandler} />;
    </Dialog>
  );
};

export default EventDialog;
