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

// renders twice, once when data, another when data is returned
const User = () => {
  // Gets events from backend where date == today
  const { data: eventsData, error } = useQuery(GET_EVENTS_BY_USER_TODAY)

  const dispatch = useAppDispatch()

  // Logouts user and removes JWT Token from local storage
  const logoutHandler = () => {
    dispatch(logout())
    localStorage.removeItem("HYD_JWT")
    dispatch(openNotification("Logged out"))
  }

  console.log(localStorage.getItem("HYD_JWT"))

  // After data is returned from backend,
  // set events to local state
  useEffect(() => {
    console.log("inside USer.tsx useEffect")
    if (eventsData) {
      console.log(eventsData.todaysEvents)
      // dispatch(setEvents(eventsData.todaysEvents))
    }
  }, [eventsData, dispatch])

  if (error) return <h1>Error: {error.message}</h1>

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
