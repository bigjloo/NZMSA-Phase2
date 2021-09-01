import Timeline from "@material-ui/lab/Timeline"
import { IEvent } from "../../store/eventReducer"
import EventTimelineItem from "./EventTimelineItem"

type EventTimelineProps = {
  events: IEvent[]
  onCardClickHandler: (event: IEvent) => void
}

const EventTimeline = ({ events, onCardClickHandler }: EventTimelineProps) => {
  return (
    <Timeline align="alternate">
      {events.map((event, index) => {
        return (
          <EventTimelineItem
            event={event}
            index={index}
            onCardClickHandler={onCardClickHandler}
          />
        )
      })}
    </Timeline>
  )
}

export default EventTimeline
