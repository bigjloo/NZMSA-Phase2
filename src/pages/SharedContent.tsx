import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_EVENTS_BY_PUBLISH_KEY } from "../apollo-client/query"
import { setEvents } from "../store/eventReducer"
import { useAppDispatch, useAppSelector } from "../store/storeHooks"
import EventTimeline from "../components/Event/EventTimeline"
import BackdropContainer from "../components/UI/BackdropContainer"
import { setSharedContentDetails } from "../store/sharedReducer"

type SharedContentParams = {
  publishKey: string
}

const SharedContent = () => {
  // Extracts publish key from the URL params
  const { publishKey } = useParams<SharedContentParams>()

  const {
    data: sharedContentData,
    loading,
    error,
  } = useQuery(GET_EVENTS_BY_PUBLISH_KEY, {
    variables: { publishKey },
  })

  const publisherName = useAppSelector<string>(
    (state) => state.shared.publisher
  )
  const publishDate = useAppSelector<string>((state) => state.shared.date)

  // Retrieves events from backend with publish key

  const dispatch = useAppDispatch()

  // When data is ready,sets publisher name + date and sets
  // events returned from data to events state
  useEffect(() => {
    if (sharedContentData) {
      const payload = {
        publisher: sharedContentData.day.user.name,
        date: sharedContentData.day.date,
      }
      dispatch(setSharedContentDetails(payload))
      dispatch(setEvents(sharedContentData.day.events))
    }
  }, [sharedContentData, dispatch])

  if (loading) return <BackdropContainer loading={loading} />

  if (error) return <h1>{error.message}</h1>

  return (
    <>
      <h1>Published Content</h1>
      <h3>
        By: {publisherName} on {publishDate.slice(0, 10)}
      </h3>
      <EventTimeline />
    </>
  )
}

export default SharedContent
