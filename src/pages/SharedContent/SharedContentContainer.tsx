import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../store/storeHooks"
import { useQuery } from "@apollo/client"
import { GET_EVENTS_BY_PUBLISH_KEY } from "../../apollo-client/query"
import { setSharedContentDetails } from "../../store/sharedReducer"
import { setEvents } from "../../store/eventReducer"
import SharedContent from "./SharedContent"
import BackdropContainer from "../../components/UI/BackdropContainer"

type SharedContentParams = {
  publishKey: string
}

// Retrieves and sets data
const SharedContentContainer = () => {
  // Extracts publish key from the URL params
  const { publishKey } = useParams<SharedContentParams>()

  const dispatch = useAppDispatch()

  // Retrieves events from backend with publish key
  const {
    data: sharedContentData,
    loading,
    error,
  } = useQuery(GET_EVENTS_BY_PUBLISH_KEY, {
    variables: { publishKey },
  })

  // When data is ready:
  // 1) sets publisher name + date
  // 2) sets events returned from data to events state
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

  return <SharedContent />
}

export default SharedContentContainer
