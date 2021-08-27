import Snackbar from "@material-ui/core/Snackbar"
import Alert from "@material-ui/lab/Alert"
import { Color } from "@material-ui/lab/Alert"

export type NotificationProps = {
  anchorOrigin: {
    vertical: "top" | "bottom"
    horizontal: "left" | "center" | "right"
  }
  isNotificationOpen: boolean
  closeNotificationHandler: () => void
  message: string
  alertType: string
}

const Notification = ({
  anchorOrigin,
  isNotificationOpen,
  closeNotificationHandler,
  message,
  alertType,
}: NotificationProps) => {
  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={anchorOrigin}
      open={isNotificationOpen}
      onClose={closeNotificationHandler}
    >
      <Alert severity={alertType as Color}>{message}</Alert>
    </Snackbar>
  )
}

export default Notification
