import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import { ChangeEvent } from "react"
import CameraContainer from "../../MediaCapture/CameraContainer"
// import EventDialogTextFields from "./EventDialogTextFields"
import TextField from "@material-ui/core/TextField"

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
  nameInput: string
  descriptionInput: string
  onAddEvent: () => void
  toggleEventDialogHandler: () => void
  onNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDescriptionInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const EventDialogContent = ({
  title,
  nameInput,
  descriptionInput,
  onAddEvent,
  toggleEventDialogHandler,
  onNameInputChange,
  onDescriptionInputChange,
}: EventDialogContentProps) => {
  const classes = useStyles()

  return (
    <DialogContent className={classes.dialogContent}>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      <TextField
        value={nameInput}
        label="Event Name"
        autoFocus
        type="text"
        fullWidth
        color="secondary"
        onChange={onNameInputChange}
      />
      <TextField
        value={descriptionInput}
        label="Description"
        fullWidth
        color="secondary"
        onChange={onDescriptionInputChange}
      />
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
