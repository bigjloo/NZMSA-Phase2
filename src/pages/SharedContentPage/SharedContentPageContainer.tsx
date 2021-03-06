import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { openNotification } from "../../store/notificationReducer"
import SharedContentPage from "./SharedContentPage"
import BackdropContainer from "../../components/Backdrop/BackdropContainer"
import useSharedContentQuery from "../../utils/hooks/useSharedContentQuery"
import { IEvent } from "../../store/eventReducer"

type SharedContentParams = {
  publishKey: string
}

const SharedContentPageContainer = () => {
  const dispatch = useAppDispatch()
  const publisherName = useAppSelector<string>(
    (state) => state.shared.publisher
  )
  const publishDate = useAppSelector<string>((state) => state.shared.date)
  const formattedPublishDate = publishDate.slice(0, 10)

  const events = useAppSelector<IEvent[]>((store) => store.events.events)

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
      publishDate={formattedPublishDate}
      events={events}
    />
  )
}

export default SharedContentPageContainer
