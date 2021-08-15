import { useEffect } from "react"

import Notification from "./Notification"
import { closeNotification } from "../../store/notificationReducer"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"

// For Snackbar positioning on screen
// const vertical = "top"
// const horizontal = "center"

// TODO - add better animation + color
// use Alert component
const NotificationContainer = () => {
  const isNotificationOpen = useAppSelector<boolean>(
    (state) => state.notification.open
  )
  const message = useAppSelector<string>((state) => state.notification.message)

  const dispatch = useAppDispatch()

  // Closes Snackbar
  const closeNotificationHandler = () => dispatch(closeNotification())

  // Closes notification Snackbar 3 seconds after displayed
  useEffect(() => {
    setTimeout(() => dispatch(closeNotification()), 3000)
  }, [message, dispatch])

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
