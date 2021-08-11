import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"

import CameraContainer from "../MediaCapture/CameraContainer"
import EventDialogTextFields from "./EventDialogTextFields"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      padding: "0",
      color: theme.palette.primary.dark,
    },

    addEventButton: {
      color: theme.palette.primary.dark,
    },
  })
)

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
  const classes = useStyles()

  return (
    <DialogContent>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      <EventDialogTextFields />
      <CameraContainer />
      <DialogActions>
        <Button
          className={classes.addEventButton}
          variant="outlined"
          onClick={onAddEvent}
        >
          Add Event
        </Button>
        <Button onClick={toggleEventDialogHandler}>Close</Button>
      </DialogActions>
    </DialogContent>
  )
}

export default EventDialogContent
