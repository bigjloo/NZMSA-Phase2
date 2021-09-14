import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useAppDispatch } from "../../store/storeHooks"
import { setUserData } from "../../store/userReducer"
import { setEvents } from "../../store/eventReducer"
import { GET_USER_DATA } from "../../apollo-client/queries"

interface IUserData {
  githubName: string
  githubImageURI: string
  sasToken: string
}

// Fetches user data and sets to local User state and
// if today's events exist, set to local Events state
function useUserQuery() {
  const dispatch = useAppDispatch()
  const { data: userData, loading, error } = useQuery(GET_USER_DATA)

  useEffect(() => {
    if (userData) {
      const userDataPayload: IUserData = {
        githubName: userData.userData.github,
        githubImageURI: userData.userData.imageURI,
        sasToken: userData.sasToken.token,
      }
      dispatch(setUserData(userDataPayload))

      // If user have saved events from today
      userData.today && dispatch(setEvents(userData.today.events))
    }
  }, [userData, dispatch])

  return { loading, error }
}

export default useUserQuery
