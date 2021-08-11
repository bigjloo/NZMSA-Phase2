import Typography from "@material-ui/core/Typography"

import EventTimeline from "../../components/Event/EventTimeline"

import LoginDialogContainer from "../../components/Login/LoginDialogContainer"
import { IEvent } from "../../store/eventReducer"

type SharedContentProps = {
  publisherName: string
  publishDate: string
  events: IEvent[]
}

const SharedContent = (props: SharedContentProps) => {
  const { publisherName, publishDate, events } = props

  return (
    <>
      <Typography variant="h1" component="h1">
        Published Content
      </Typography>
      <Typography variant="h3" component="h3">
        By: {publisherName} on {publishDate}
      </Typography>
      <EventTimeline events={events} />
      <LoginDialogContainer />
    </>
  )
}

export default SharedContent
