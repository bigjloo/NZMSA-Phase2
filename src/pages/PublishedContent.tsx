import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_EVENTS_BY_PUBLISH_KEY } from "../apollo-client/query"
import { setEvents } from "../store/eventReducer"
import { useAppDispatch } from "../store/storeHooks"
import EventTimeline from "../components/Event/EventTimeline"
import BackdropContainer from "../components/UI/BackdropContainer"

type PublishContentParams = {
  publishKey: string
}

const PublishContent = () => {
  const [publisher, setPublisher] = useState("")
  const [date, setDate] = useState("")

  const { publishKey } = useParams<PublishContentParams>()

  const { data, loading, error } = useQuery(GET_EVENTS_BY_PUBLISH_KEY, {
    variables: { publishKey },
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      setPublisher(data.day.user.name)
      setDate(data.day.date)
      dispatch(setEvents(data.day.events))
    }
  }, [data, dispatch])

  if (loading) return <BackdropContainer loading={loading} />

  if (error) return <h1>{error.message}</h1>

  return (
    <>
      <h1>Published Content</h1>
      <h3>
        By: {publisher} on {date.slice(0, 10)}
      </h3>
      <EventTimeline />
    </>
  )
}

export default PublishContent
