import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useAppDispatch } from "../hooks/storeHooks"

import Button from "@material-ui/core/Button"

import { logout } from "../store/authReducer"
import { setEvents } from "../store/eventReducer"

import { GET_EVENTS_BY_USER_TODAY } from "../apollo-client/query"

import EventDialogContainer from "../components/Event/EventDialogContainer"
import ShareDialogContainer from "../components/Share/ShareDialogContainer"
import Canvas from "../components/UI/Canvas"
import { IEvent } from "../common/types_interfaces"

const User = () => {
  // Change query to retrieve day/event
  const { loading, data, error } = useQuery(GET_EVENTS_BY_USER_TODAY)

  // const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    localStorage.removeItem("HYD_JWT")
  }

  console.log(localStorage.getItem("HYD_JWT"))

  // render twice
  // once when data = null? and once after data returned?
  useEffect(() => {
    // when data is ready
    // add events to state by order
    console.log("inside useEffect")
    if (data) {
      let events: IEvent[] = []
      for (let event of data.eventsForToday) {
        events = [
          ...events,
          { name: event.name, description: event.description },
        ]
      }
      dispatch(setEvents(events))
    }
  }, [data, dispatch])

  // TODO loading spinner
  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>{error.message}</h1>

  return (
    <>
      <h1>App page</h1>
      <Button onClick={logoutHandler}>Log Out</Button>
      <Canvas />
      <EventDialogContainer />
      <ShareDialogContainer />
    </>
  )
}

export default User
