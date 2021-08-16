import Snackbar from "@material-ui/core/Snackbar"

type NotificationProps = {
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
      anchorOrigin={anchorOrigin}
      open={isNotificationOpen}
      onClose={closeNotificationHandler}
      message={message}
    />
  )
}

export default Notification
