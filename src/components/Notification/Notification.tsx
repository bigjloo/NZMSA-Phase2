import Snackbar from "@material-ui/core/Snackbar"
import Alert from "@material-ui/lab/Alert"
import { Color } from "@material-ui/lab/Alert"

export type NotificationProps = {
  anchorOrigin: {
    vertical: "top" | "bottom"
    horizontal: "left" | "center" | "right"
  }
  isNotificationOpen: boolean
  message: string
  alertType: string
  closeNotificationHandler: () => void
}

const Notification = ({
  anchorOrigin,
  isNotificationOpen,
  message,
  alertType,
  closeNotificationHandler,
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
