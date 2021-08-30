import { closeNotification } from "../../store/notificationReducer"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import Notification from "./Notification"

const NotificationContainer = () => {
  const dispatch = useAppDispatch()
  const isNotificationOpen = useAppSelector<boolean>(
    (state) => state.notification.open
  )
  const message = useAppSelector<string>((state) => state.notification.message)
  const alertType = useAppSelector<string>(
    (state) => state.notification.alertType
  )

  const closeNotificationHandler = () => dispatch(closeNotification())

  return (
    <Notification
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      isNotificationOpen={isNotificationOpen}
      closeNotificationHandler={closeNotificationHandler}
      message={message}
      alertType={alertType}
    />
  )
}

export default NotificationContainer
