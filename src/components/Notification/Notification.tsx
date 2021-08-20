import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"

export type NotificationProps = {
  anchorOrigin: {
    vertical: "top" | "bottom"
    horizontal: "left" | "center" | "right"
  }
  isNotificationOpen: boolean
  closeNotificationHandler: () => void
  message: string
}

const Notification = ({
  anchorOrigin,
  isNotificationOpen,
  closeNotificationHandler,
  message,
}: NotificationProps) => {
  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={anchorOrigin}
      open={isNotificationOpen}
      onClose={closeNotificationHandler}
    >
      <MuiAlert severity="success">{message}</MuiAlert>
    </Snackbar>
  )
}

export default Notification
