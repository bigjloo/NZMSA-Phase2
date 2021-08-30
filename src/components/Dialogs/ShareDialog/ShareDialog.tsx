import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
// import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ShareDialogStyles from "./ShareDialogStyles"

export type ShareDialogProps = ShareDialogTextProps & {
  isShareDialogOpen: boolean
  toggleHandler: () => void
}

type ShareDialogTextProps = ShareDialogActionProps & {
  publishURL: string
}

type ShareDialogActionProps = {
  onCopyToClipboard: () => void
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
  const copyButtonText = "Copy"
  return (
    <DialogActions>
      <Button variant="outlined" onClick={onCopyToClipboard}>
        {copyButtonText}
      </Button>
    </DialogActions>
  )
}

const ShareDialogText = (props: ShareDialogTextProps) => {
  const classes = ShareDialogStyles()
  const { publishURL, onCopyToClipboard } = props
  return (
    <DialogContentText className={classes.dialogContentText}>
      <Typography onDoubleClick={onCopyToClipboard}>{publishURL}</Typography>
    </DialogContentText>
  )
}

export default ShareDialog
