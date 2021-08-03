import { useEffect } from "react"

import Button from "@material-ui/core/Button"

import { useAppDispatch, useAppSelector } from "../hooks/storeHooks"
import { logout } from "../store/authReducer"
import EventDialog from "../components/Event/EventDialog"
import ShareDialog from "../components/Share/ShareDialog"
import Canvas from "../components/UI/Canvas"
import { useQuery } from "@apollo/client"
import {
  GET_USER_INFO_WITH_JWT,
  GET_DAY,
  GET_EVENTS_BY_USER_TODAY,
} from "../apollo-client/query"
import { addEvent } from "../store/eventReducer"

const User = () => {
  // Change query to retrieve day/event
  const { loading, data, error } = useQuery(GET_EVENTS_BY_USER_TODAY)

  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    localStorage.removeItem("HYD_JWT")
  }

  console.log(localStorage.getItem("HYD_JWT"))

  useEffect(() => {
    // when data is ready
    // add events to state by order
    console.log("inside useEffect")
    if (data) {
      for (let event of data.eventsForToday) {
        const { name, description } = event
        dispatch(addEvent({ name, description }))
      }
    }
  }, [data])

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>{error.message}</h1>

  return (
    <>
      <h1>App page</h1>
      <Button onClick={logoutHandler}>Log Out</Button>
      <Canvas />
      <EventDialog />
      <ShareDialog />
    </>
  )
}

export default User
