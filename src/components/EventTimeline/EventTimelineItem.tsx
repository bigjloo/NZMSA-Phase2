import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import Typography from "@material-ui/core/Typography"

import { IEvent } from "../../store/eventReducer"
import EventTimelineItemCard from "./EventTimelineItemCard"

type TimelineEventProps = {
  event: IEvent
}

type TimelineEventContentProps = TimelineEventProps & {
  onCardClickHandler: (event: IEvent) => void
}

type EventTimelineItemProps = TimelineEventContentProps & {
  index: number
}

const EventTimelineItem = ({
  event,
  index,
  onCardClickHandler,
}: EventTimelineItemProps) => {
  return (
    <TimelineItem key={index}>
      <EventTimelineName event={event} />
      <EventTimelineSeparator />
      <TimelineContent>
        <EventTimelineItemCard
          event={event}
          onCardClickHandler={onCardClickHandler}
        />
      </TimelineContent>
    </TimelineItem>
  )
}

const EventTimelineName = ({ event }: TimelineEventProps) => {
  return (
    <TimelineOppositeContent>
      <Typography variant="overline">{event.name}</Typography>
    </TimelineOppositeContent>
  )
}

const EventTimelineSeparator = () => {
  return (
    <TimelineSeparator>
      <TimelineDot color="secondary" variant="outlined" />
      <TimelineConnector />
    </TimelineSeparator>
  )
}

export default EventTimelineItem
