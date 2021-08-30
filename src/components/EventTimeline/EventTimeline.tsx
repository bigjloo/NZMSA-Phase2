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

type EventTimelineProps = {
  events: IEvent[]
  onCardClickHandler: (event: IEvent) => void
}

type EventTimelineItemProps = {
  event: IEvent
  index: number
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

const EventTimelineItem = (props: EventTimelineItemProps) => {
  const { event, index, onCardClickHandler } = props
  return (
    <TimelineItem key={index}>
      <TimelineOppositeContent>
        <Typography variant="overline">{event.name}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <EventTimelineCard
          event={event}
          onCardClickHandler={onCardClickHandler}
        />
      </TimelineContent>
    </TimelineItem>
  )
}

export default EventTimeline
