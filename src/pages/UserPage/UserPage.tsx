import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { setEvents } from "../../store/eventReducer"
import { GET_USER_DATA } from "../../apollo-client/queries"
import { getRandomMoment } from "../../api/get-random-moment"
import { setUserData } from "../../store/userReducer"
import { IEvent } from "../../store/eventReducer"
import BackdropContainer from "../../components/Backdrop/BackdropContainer"
import User from "./User"

const UserPage = () => {
  const events = useAppSelector<IEvent[]>((store) => store.events.events)

  // Fetches initial User data from backend
  const { data, loading, error } = useQuery(GET_USER_DATA)

  const dispatch = useAppDispatch()

  // After data is returned from backend,
  // set fetched data to local state
  useEffect(() => {
    if (data) {
      // Sets fetched user data to local User state
      const userDataPayload = {
        githubName: data.userData.github,
        githubImageURI: data.userData.imageURI,
        sasToken: data.sasToken.token,
      }
      dispatch(setUserData(userDataPayload))

      // Sets fetched events to local Events state
      if (data.todaysEvents) {
        dispatch(setEvents(data.todaysEvents))
      } else {
        const randomMoment = getRandomMoment()
        console.log(randomMoment)
      }
    }
  }, [data, dispatch])

  if (loading) return <BackdropContainer loading={loading} />

  if (error) return <h1>Error: {error.message}</h1>

  return <User events={events} />
}

export default UserPage
