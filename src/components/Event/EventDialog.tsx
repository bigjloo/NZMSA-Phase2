import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { setCardImage, setIsCameraOpen } from "../../store/cameraReducer"
import { toggleEventDialog } from "../../store/dialogReducer"
import { removeEvent } from "../../store/eventReducer"

import Dialog from "@material-ui/core/Dialog"

import EventDialogContentContainer from "./EventDialogContentContainer"
import EventList from "./EventList"

const EventDialogContainer = () => {
  const openEventDialog = useAppSelector<boolean>(
    (state) => state.dialog.isEventDialogOpen
  )

  const dispatch = useAppDispatch()

  // Toggles AddEvent dialog
  const toggleEventDialogHandler = () => {
    dispatch(toggleEventDialog())
    dispatch(setCardImage(undefined))
    dispatch(setIsCameraOpen(false))
  }

  // Removes individual event from events state
  const onRemoveEvent = (index: number) => dispatch(removeEvent(index))

  return (
    <Dialog open={openEventDialog} onClose={toggleEventDialogHandler}>
      <EventList onRemoveEvent={onRemoveEvent} />
      <EventDialogContentContainer
        toggleEventDialogHandler={toggleEventDialogHandler}
      />
    </Dialog>
  )
}

export default EventDialogContainer
