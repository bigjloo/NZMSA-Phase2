import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useAppDispatch } from "../../store/storeHooks"
import { setSharedContentDetails } from "../../store/sharedReducer"
import { setEvents } from "../../store/eventReducer"
import { GET_EVENTS_BY_PUBLISH_KEY } from "../../apollo-client/queries"

interface IPublishDetails {
  publisher: string
  date: string
}

// Retrieves events from backend using
// publish key and sets to local state
function useSharedContentQuery(publishKey: string) {
  const dispatch = useAppDispatch()
  const { data: sharedContentData, loading, error } = useQuery(
    GET_EVENTS_BY_PUBLISH_KEY,
    {
      variables: { publishKey },
    }
  )

  useEffect(() => {
    if (sharedContentData) {
      const sharedContentPayload: IPublishDetails = {
        publisher: sharedContentData.day.user.name,
        date: sharedContentData.day.date,
      }
      dispatch(setSharedContentDetails(sharedContentPayload))
      dispatch(setEvents(sharedContentData.day.events))
    }
  }, [sharedContentData, dispatch])

  return { loading, error }
}

export default useSharedContentQuery
