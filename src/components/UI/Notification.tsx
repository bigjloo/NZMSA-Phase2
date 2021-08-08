import { useEffect } from "react"

import Snackbar from "@material-ui/core/Snackbar"
import { closeNotification } from "../../store/notificationReducer"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"

const vertical = "top"
const horizontal = "center"

const Notification = () => {
  console.log("inside notification")
  const open = useAppSelector<boolean>((state) => state.notification.open)
  const message = useAppSelector<string>((state) => state.notification.message)

  const dispatch = useAppDispatch()

  const closeHandler = () => dispatch(closeNotification)

  // Closes notification Snackbar 3 seconds after message is set in reducer
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
