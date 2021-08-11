import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useAppDispatch } from "../../store/storeHooks"

import { setEvents } from "../../store/eventReducer"

import { GET_USER_DATA } from "../../apollo-client/query"

import EventDialog from "../Event/EventDialog"
import ShareDialogContainer from "../Share/ShareDialogContainer"
import UserCanvas from "./UserCanvas"
import BackdropContainer from "../../components/UI/BackdropContainer"
// import Typography from "@material-ui/core/Typography"
import { setUserData } from "../../store/userReducer"

const User = () => {
  // Fetches initial User data from backend
  const { data, loading, error } = useQuery(GET_USER_DATA)

  const dispatch = useAppDispatch()

  // After data is returned from backend,
  // set fetched data to local state
  useEffect(() => {
    if (data) {
      // Sets user data to local User state
      console.log("setting user data")
      const userDataPayload = {
        githubName: data.userData.github,
        githubImageURI: data.userData.imageURI,
        sasToken: data.sasToken.token,
      }
      dispatch(setUserData(userDataPayload))

      // Sets fetched events to local Events state
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
      <EventDialog />
      <ShareDialogContainer />
    </>
  )
}

export default User
