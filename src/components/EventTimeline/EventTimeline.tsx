import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import Typography from "@material-ui/core/Typography"
import { IEvent } from "../../store/eventReducer"
import EventTimelineCard from "./EventTimelineCard"

const EventTimeline = ({ events }: { events: IEvent[] }) => {
  return (
    <Timeline align="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="overline">{event.name}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <EventTimelineCard event={event} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default EventTimeline
