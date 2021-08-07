import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useAppDispatch } from "../../store/storeHooks"

import Button from "@material-ui/core/Button"

import { logout } from "../../store/authReducer"
import { setEvents } from "../../store/eventReducer"
import { openNotification } from "../../store/notificationReducer"

import { GET_EVENTS_BY_USER_TODAY } from "../../apollo-client/query"

import EventDialogContainer from "../Event/EventDialogContainer"
import ShareDialogContainer from "../Share/ShareDialogContainer"
import UserCanvas from "./UserCanvas"

const User = () => {
  const { data, error } = useQuery(GET_EVENTS_BY_USER_TODAY)

  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    dispatch(openNotification("Logged out"))
    localStorage.removeItem("HYD_JWT")
  }

  console.log(localStorage.getItem("HYD_JWT"))

  useEffect(() => {
    console.log("inside USer.tsx useEffect")
    if (data) {
      dispatch(setEvents(data.todaysEvents))
    }
  }, [data, dispatch])

  if (error) return <h1>{error.message}</h1>

  return (
    <>
      <h1>App page</h1>
      <Button onClick={logoutHandler}>Log Out</Button>
      <UserCanvas />
      <EventDialogContainer />
      <ShareDialogContainer />
    </>
  )
}

export default User