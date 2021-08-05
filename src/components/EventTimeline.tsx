import { useAppSelector } from "../hooks/storeHooks"

import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import Typography from "@material-ui/core/Typography"

import { IEvent } from "../common/types_interfaces"

const EventTimeline = () => {
  const events = useAppSelector<IEvent[]>((store) => store.events.events)

  return (
    <Timeline align="alternate">
      {events.map((event) => (
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="subtitle2">{event.name}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body2">{event.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default EventTimeline
