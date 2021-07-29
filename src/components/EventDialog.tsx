import { useRef } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { toggleDialog } from "../store/dialogReducer";
import { addEvent } from "../store/eventReducer";

import EventForm from "./EventForm";
import EventList from "./EventList";
import Dialog from "@material-ui/core/Dialog";

const EventDialog = () => {
  const nameRef = useRef<HTMLInputElement>();
  const captionRef = useRef<HTMLInputElement>();

  const open = useAppSelector((state) => state.dialog.isOpen);
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(toggleDialog());
  };

  const onAddEvent = () => {
    const payload = {
      name: nameRef.current ? nameRef.current.value : "",
      caption: captionRef.current ? captionRef.current.value : "",
    };
    dispatch(addEvent(payload));
  };

  const onRemoveEvent = () => {
    console.log("on remove event");
  };

  return (
    <Dialog open={open} onClose={toggleHandler}>
      <EventList onRemoveEvent={onRemoveEvent} />
      <EventForm
        onAddEvent={onAddEvent}
        toggleDialogHandler={toggleHandler}
        nameRef={nameRef}
        captionRef={captionRef}
      />
    </Dialog>
  );
};

export default EventDialog;
