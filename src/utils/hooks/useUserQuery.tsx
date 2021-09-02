import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useAppDispatch } from "../../store/storeHooks"
import { setUserData } from "../../store/userReducer"
import { setEvents } from "../../store/eventReducer"
import { GET_USER_DATA } from "../../apollo-client/queries"

// Fetches user data and sets to local User state and
// if today's events exist, set to local Events state
const useUserQuery = () => {
  const dispatch = useAppDispatch()
  const { data: userData, loading, error } = useQuery(GET_USER_DATA)

  useEffect(() => {
    if (userData) {
      // user data
      const userDataPayload = {
        githubName: userData.userData.github,
        githubImageURI: userData.userData.imageURI,
        sasToken: userData.sasToken.token,
      }
      dispatch(setUserData(userDataPayload))

      // today's events
      userData.today && dispatch(setEvents(userData.today.events))
    }
  }, [userData, dispatch])

  return { loading, error }
}

export default useUserQuery
