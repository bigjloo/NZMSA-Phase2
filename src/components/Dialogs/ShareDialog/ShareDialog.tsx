import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ShareDialogStyles from "./ShareDialogStyles"
import FileCopyIcon from "@material-ui/icons/FileCopy"

export type ShareDialogProps = {
  publishURL: string
  isShareDialogOpen: boolean
  onCopyToClipboard: () => void
  toggleHandler: () => void
}

type CopyButtonProps = Pick<ShareDialogProps, "onCopyToClipboard">

type ShareableURLProps = Pick<ShareDialogProps, "publishURL">

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
          <ShareableURL publishURL={publishURL} />
        </DialogContentText>
        <DialogActions>
          <CopyButton onCopyToClipboard={onCopyToClipboard} />
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

const ShareableURL = ({ publishURL }: ShareableURLProps) => {
  return <Typography>{publishURL}</Typography>
}

const CopyButton = ({ onCopyToClipboard }: CopyButtonProps) => {
  return (
    <Button
      children="Copy"
      onClick={onCopyToClipboard}
      startIcon={<FileCopyIcon />}
    />
  )
}

export default ShareDialog
