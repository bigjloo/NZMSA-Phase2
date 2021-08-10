import Typography from "@material-ui/core/Typography"
import { useAppSelector } from "../../store/storeHooks"
import EventTimeline from "../../components/Event/EventTimeline"

import LoginDialogContainer from "../../components/Login/LoginDialogContainer"

export interface IEvent {
  name: string
  description: string
  photoURI: string | null
}

const SharedContent = () => {
  const publisherName = useAppSelector<string>(
    (state) => state.shared.publisher
  )
  const publishDate = useAppSelector<string>((state) => state.shared.date)

  const events = useAppSelector<IEvent[]>((store) => store.events.events)

  console.log("inside SHaredContent")
  return (
    <>
      <Typography variant="h1" component="h1">
        Published Content
      </Typography>
      <Typography variant="h3" component="h3">
        By: {publisherName} on {publishDate.slice(0, 10)}
      </Typography>
      <EventTimeline events={events} />
      <LoginDialogContainer />
    </>
  )
}

export default SharedContent
