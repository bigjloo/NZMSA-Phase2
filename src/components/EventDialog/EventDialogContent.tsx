import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"

import CameraContainer from "../MediaCapture/CameraContainer"
import EventDialogTextFields from "./EventDialogTextFields"

import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      padding: "0",
      // color: theme.palette.secondary.contrastText,
    },

    addEventButton: {
      // color: theme.palette.secondary.contrastText,
    },

    dialogContent: {
      "& > *": {
        padding: "0.5rem 0",
      },
    },

    dialogActions: {
      margin: "0.5rem 0",
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
    <DialogContent className={classes.dialogContent}>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      <EventDialogTextFields />
      <CameraContainer />
      <DialogActions className={classes.dialogActions}>
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