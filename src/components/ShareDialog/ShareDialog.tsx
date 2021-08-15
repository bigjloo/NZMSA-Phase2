import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
// import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

type ShareDialogProps = {
  publishURL: string
  openShareDialog: boolean
  onCopyToClipboard: () => void
  toggleHandler: () => void
}

const ShareDialog = ({
  publishURL,
  openShareDialog,
  onCopyToClipboard,
  toggleHandler,
}: ShareDialogProps) => {
  // Rethink UX for copy
  return (
    <Dialog open={openShareDialog} onClose={toggleHandler}>
      <DialogContent>
        <DialogContentText style={{ margin: "1rem 0" }}>
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
