import { ChangeEvent } from "react";
import Dialog from "@material-ui/core/Dialog";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { toggleEventDialog } from "../../store/dialogReducer";
import { addEvent, removeEvent } from "../../store/eventReducer";
import {
  handleNameInputChange,
  handleDescriptionInputChange,
  resetInputFields,
} from "../../store/formInputReducer";
import EventDialogContent from "./EventDialogContent";
import EventList from "./EventList";

const EventDialog = () => {
  const [nameInput, descriptionInput, openEventDialog] = useAppSelector(
    (state) => [
      state.formInput.name,
      state.formInput.description,
      state.dialog.isEventDialogOpen,
    ]
  );

  const dispatch = useAppDispatch();

  // Opens/closes Dialog
  const toggleHandler = () => dispatch(toggleEventDialog());

  // Adds event
  const onAddEvent = () => {
    const payload = {
      name: nameInput,
      description: descriptionInput,
    };
    dispatch(addEvent(payload));
    dispatch(resetInputFields());
  };

  // Removes event
  const onRemoveEvent = (index: number) => dispatch(removeEvent(index));

  // Handle name input change
  const onNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleNameInputChange(event.target.value));
  };

  // Handle description input change
  const onDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleDescriptionInputChange(event.target.value));
  };

  return (
    <Dialog open={openEventDialog} onClose={toggleHandler}>
      <EventList onRemoveEvent={onRemoveEvent} />
      <EventDialogContent
        nameInput={nameInput}
        descriptionInput={descriptionInput}
        onAddEvent={onAddEvent}
        toggleDialogHandler={toggleHandler}
        onNameInputChange={onNameInputChange}
        onDescriptionInputChange={onDescriptionInputChange}
      />
    </Dialog>
  );
};

export default EventDialog;
