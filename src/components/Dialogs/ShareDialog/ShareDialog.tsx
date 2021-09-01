import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ShareDialogStyles from "./ShareDialogStyles"
import FileCopyIcon from "@material-ui/icons/FileCopy"

type ShareDialogActionProps = {
  onCopyToClipboard: () => void
}

type ShareDialogTextProps = ShareDialogActionProps & {
  publishURL: string
}

export type ShareDialogProps = ShareDialogTextProps & {
  isShareDialogOpen: boolean
  toggleHandler: () => void
}

const ShareDialog = ({
  publishURL,
  isShareDialogOpen,
  onCopyToClipboard,
  toggleHandler,
}: ShareDialogProps) => {
  return (
    <Dialog open={isShareDialogOpen} onClose={toggleHandler}>
      <DialogContent>
        <ShareDialogText
          publishURL={publishURL}
          onCopyToClipboard={onCopyToClipboard}
        />
        <ShareDialogActions onCopyToClipboard={onCopyToClipboard} />
      </DialogContent>
    </Dialog>
  )
}

const ShareDialogActions = ({ onCopyToClipboard }: ShareDialogActionProps) => {
  const buttonText = "Copy"
  return (
    <DialogActions>
      <Button onClick={onCopyToClipboard} startIcon={<FileCopyIcon />}>
        {buttonText}
      </Button>
    </DialogActions>
  )
}

const ShareDialogText = ({
  publishURL,
  onCopyToClipboard,
}: ShareDialogTextProps) => {
  const classes = ShareDialogStyles()
  return (
    <DialogContentText className={classes.dialogContentText}>
      <Typography onDoubleClick={onCopyToClipboard}>{publishURL}</Typography>
    </DialogContentText>
  )
}

export default ShareDialog
