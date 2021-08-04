import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import FileCopyIcon from "@material-ui/icons/FileCopy"

type ShareDialogProps = {
  publishURL: string
  openShareDialog: boolean
  copyToClipboard: () => void
  toggleHandler: () => void
}

const ShareDialog = (props: ShareDialogProps) => {
  const { publishURL, openShareDialog, copyToClipboard, toggleHandler } = props

  return (
    <Dialog open={openShareDialog} onClose={toggleHandler}>
      <DialogTitle>Share</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>
            <span onDoubleClick={copyToClipboard}>{publishURL}</span>
            <FileCopyIcon onClick={copyToClipboard} />
          </Typography>
        </DialogContentText>
        <DialogActions>
          <Button>Share to friends</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default ShareDialog
