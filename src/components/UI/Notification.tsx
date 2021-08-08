import { useEffect } from "react"

import Snackbar from "@material-ui/core/Snackbar"
import { closeNotification } from "../../store/notificationReducer"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"

const vertical = "top"
const horizontal = "center"

const Notification = () => {
  const [open, message] = useAppSelector((state) => [
    state.notification.open,
    state.notification.message,
  ])

  const dispatch = useAppDispatch()

  const closeHandler = () => dispatch(closeNotification)
  
  // Closes notification snackbar after 3 seconds
  useEffect(() => {
    setTimeout(() => dispatch(closeNotification()), 3000)
  }, [message, dispatch])

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={closeHandler}
      message={message}
    />
  )
}

export default Notification
