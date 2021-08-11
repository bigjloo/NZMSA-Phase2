import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"

import CameraContainer from "../MediaCapture/CameraContainer"
import TextFieldsContainer from "./TextFieldsContainer"

type EventDialogContentProps = {
  title: string
  onAddEvent: () => void
  toggleEventDialogHandler: () => void
}

const EventDialogContent = ({
  title,
  onAddEvent,
  toggleEventDialogHandler,
}: EventDialogContentProps) => {
  return (
    <DialogContent>
      <DialogTitle>{title}</DialogTitle>
      <TextFieldsContainer />
      <CameraContainer />
      <DialogActions>
        <Button variant="outlined" onClick={onAddEvent}>
          Add Event
        </Button>
        <Button onClick={toggleEventDialogHandler}>Close</Button>
      </DialogActions>
    </DialogContent>
  )
}

export default EventDialogContent
