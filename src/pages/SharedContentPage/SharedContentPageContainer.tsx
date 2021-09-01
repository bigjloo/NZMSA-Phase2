import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_EVENTS_BY_PUBLISH_KEY } from "../../apollo-client/queries"

import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { setSharedContentDetails } from "../../store/sharedReducer"
import { setEvents, IEvent } from "../../store/eventReducer"
import { openNotification } from "../../store/notificationReducer"

import SharedContentPage from "./SharedContentPage"
import BackdropContainer from "../../components/Backdrop/BackdropContainer"

type SharedContentParams = {
  publishKey: string
}

const SharedContentPageContainer = () => {
  const dispatch = useAppDispatch()
  const publisherName = useAppSelector<string>(
    (state) => state.shared.publisher
  )
  const publishDate = useAppSelector<string>((state) => state.shared.date)
  const events = useAppSelector<IEvent[]>((store) => store.events.events)

  // Extracts publish key from the URL params
  const { publishKey } = useParams<SharedContentParams>()
  const { loading, error } = useSharedContentQuery(publishKey)

  if (error) {
    dispatch(
      openNotification({
        message: "Error fetching data. Please try again",
        alertType: "error",
      })
    )
  }

  if (loading) return <BackdropContainer loading={loading} />

  return (
    <SharedContentPage
      publisherName={publisherName}
      publishDate={publishDate.slice(0, 10)}
      events={events}
    />
  )
}

// Retrieves events from backend using
// publish key and sets to local state
const useSharedContentQuery = (publishKey: string) => {
  const dispatch = useAppDispatch()
  const { data: sharedContentData, loading, error } = useQuery(
    GET_EVENTS_BY_PUBLISH_KEY,
    {
      variables: { publishKey },
    }
  )

  useEffect(() => {
    if (sharedContentData) {
      const sharedContentPayload = {
        publisher: sharedContentData.day.user.name,
        date: sharedContentData.day.date,
      }
      dispatch(setSharedContentDetails(sharedContentPayload))
      dispatch(setEvents(sharedContentData.day.events))
    }
  }, [sharedContentData, dispatch])

  return { loading, error }
}

export default SharedContentPageContainer
