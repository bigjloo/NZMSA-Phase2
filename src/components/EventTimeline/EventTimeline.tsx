import Timeline from "@material-ui/lab/Timeline"
import { IEvent } from "../../store/eventReducer"
import EventTimelineItem from "./EventTimelineItem"

type EventTimelineProps = {
  events: IEvent[]
  onCardClickHandler: (event: IEvent) => void
}

const EventTimeline = (props: EventTimelineProps) => {
  const { events, onCardClickHandler } = props

  const renderEventTimelineItems = () => {
    return events.map((event, index) => {
      return (
        <EventTimelineItem
          event={event}
          index={index}
          onCardClickHandler={onCardClickHandler}
        />
      )
    })
  }

  return <Timeline align="alternate">{renderEventTimelineItems()}</Timeline>
}

export default EventTimeline
