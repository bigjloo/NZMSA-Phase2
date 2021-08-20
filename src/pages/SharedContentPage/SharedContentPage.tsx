import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_EVENTS_BY_PUBLISH_KEY } from "../../apollo-client/queries"

import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { setSharedContentDetails } from "../../store/sharedReducer"
import { setEvents, IEvent } from "../../store/eventReducer"

import SharedContent from "./SharedContent"
import BackdropContainer from "../../components/Backdrop/BackdropContainer"

type SharedContentParams = {
  publishKey: string
}

const SharedContentPage = () => {
  // Extracts publish key from the URL params
  const { publishKey } = useParams<SharedContentParams>()

  // Retrieves events from backend with publish key
  const { data: sharedContentData, loading, error } = useQuery(
    GET_EVENTS_BY_PUBLISH_KEY,
    {
      variables: { publishKey },
    }
  )

  const publisherName = useAppSelector<string>(
    (state) => state.shared.publisher
  )
  const publishDate = useAppSelector<string>((state) => state.shared.date)
  const events = useAppSelector<IEvent[]>((store) => store.events.events)

  const dispatch = useAppDispatch()

  // If sharedContentData is returned,
  // set publisher name and date + set fetched
  // events to local events state
  useEffect(() => {
    if (sharedContentData) {
      const shareContentPayload = {
        publisher: sharedContentData.day.user.name,
        date: sharedContentData.day.date,
      }
      dispatch(setSharedContentDetails(shareContentPayload))
      dispatch(setEvents(sharedContentData.day.events))
    }
  }, [sharedContentData, dispatch])

  if (loading) return <BackdropContainer loading={loading} />

  if (error) return <h1>{error.message}</h1>

  return (
    <SharedContent
      publisherName={publisherName}
      publishDate={publishDate.slice(0, 10)}
      events={events}
    />
  )
}

export default SharedContentPage
