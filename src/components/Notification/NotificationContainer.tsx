import { closeNotification } from "../../store/notificationReducer"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import Notification from "./Notification"

const NotificationContainer = () => {
  const isNotificationOpen = useAppSelector<boolean>(
    (state) => state.notification.open
  )
  const message = useAppSelector<string>((state) => state.notification.message)

  const dispatch = useAppDispatch()

  // Closes Snackbar
  const closeNotificationHandler = () => dispatch(closeNotification())

  return (
    <Notification
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      isNotificationOpen={isNotificationOpen}
      closeNotificationHandler={closeNotificationHandler}
      message={message}
    />
  )
}

export default NotificationContainer
