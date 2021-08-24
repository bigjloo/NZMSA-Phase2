import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
// import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ShareDialogStyles from "./ShareDialogStyles"

export type ShareDialogProps = {
  publishURL: string
  isShareDialogOpen: boolean
  onCopyToClipboard: () => void
  toggleHandler: () => void
}

const ShareDialog = ({
  publishURL,
  isShareDialogOpen,
  onCopyToClipboard,
  toggleHandler,
}: ShareDialogProps) => {
  const classes = ShareDialogStyles()
  return (
    <Dialog open={isShareDialogOpen} onClose={toggleHandler}>
      <DialogContent>
        <DialogContentText className={classes.dialogContentText}>
          <Typography onDoubleClick={onCopyToClipboard}>
            {publishURL}
          </Typography>
        </DialogContentText>
        <DialogActions>
          <Button variant="outlined" onClick={onCopyToClipboard}>
            Copy
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default ShareDialog
