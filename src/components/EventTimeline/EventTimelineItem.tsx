import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import Typography from "@material-ui/core/Typography"

import { IEvent } from "../../store/eventReducer"
import EventTimelineItemCard from "./EventTimelineItemCard"

type EventTimelineItemProps = {
  event: IEvent
  index: number
  onCardClickHandler: (event: IEvent) => void
}

const EventTimelineItem = ({
  event,
  index,
  onCardClickHandler,
}: EventTimelineItemProps) => {
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
        <EventTimelineItemCard
          event={event}
          onCardClickHandler={onCardClickHandler}
        />
      </TimelineContent>
    </TimelineItem>
  )
}

export default EventTimelineItem
