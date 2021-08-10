import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useAppDispatch } from "../../store/storeHooks"

import { setEvents } from "../../store/eventReducer"

import { GET_USER_DATA } from "../../apollo-client/query"

import EventDialogContainer from "../Event/EventDialogContainer"
import ShareDialogContainer from "../Share/ShareDialogContainer"
import UserCanvas from "./UserCanvas"
import BackdropContainer from "../../components/UI/BackdropContainer"
// import Typography from "@material-ui/core/Typography"
import { setUserData } from "../../store/userReducer"

const User = () => {
  // Gets user initial data from backend
  const { data, loading, error } = useQuery(GET_USER_DATA)

  const dispatch = useAppDispatch()

  // After data is returned from backend,
  // set events to local state
  useEffect(() => {
    if (data) {
      // Sets user data to local state
      const userDataPayload = {
        githubName: data.userData.github,
        githubImageURI: data.userData.imageURI,
      }
      dispatch(setUserData(userDataPayload))

      // Sets fetched events to local state
      dispatch(setEvents(data.todaysEvents))
    }
  }, [data, dispatch])

  if (loading) return <BackdropContainer loading={loading} />

  if (error) return <h1>Error: {error.message}</h1>

  console.log(localStorage.getItem("HYD_JWT"))

  return (
    <>
      {/* <Typography variant="h1" component="h1">
        App page
      </Typography> */}
      <UserCanvas />
      <EventDialogContainer />
      <ShareDialogContainer />
    </>
  )
}

export default User
