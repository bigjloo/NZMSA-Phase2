import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { setEvents } from "../../store/eventReducer"
import { GET_USER_DATA } from "../../apollo-client/queries"
import { setUserData } from "../../store/userReducer"
import { IEvent } from "../../store/eventReducer"
import { openNotification } from "../../store/notificationReducer"
import BackdropContainer from "../../components/Backdrop/BackdropContainer"
import UserPage from "./UserPage"

const UserPageContainer = () => {
  const dispatch = useAppDispatch()
  const events = useAppSelector<IEvent[]>((store) => store.events.events)

  const { loading, error } = useUserQuery()

  if (error) {
    dispatch(
      openNotification({
        message: "Error fetching data. Please try again",
        alertType: "error",
      })
    )
  }

  if (loading) return <BackdropContainer loading={loading} />

  return <UserPage events={events} />
}

const useUserQuery = () => {
  const dispatch = useAppDispatch()
  const { data: userData, loading, error } = useQuery(GET_USER_DATA)

  useEffect(() => {
    if (userData) {
      // Sets fetched user data to local User state
      const userDataPayload = {
        githubName: userData.userData.github,
        githubImageURI: userData.userData.imageURI,
        sasToken: userData.sasToken.token,
      }
      dispatch(setUserData(userDataPayload))

      // Sets fetched events to local Events state if exist
      userData.today && dispatch(setEvents(userData.today.events))
    }
  }, [userData, dispatch])

  return { loading, error }
}

export default UserPageContainer
