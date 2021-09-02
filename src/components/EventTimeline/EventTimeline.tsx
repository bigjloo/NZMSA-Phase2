import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"

import { IEvent } from "../../store/eventReducer"
import EventTimelineStyles from "./EventTimelineStyles"

type EventTimelineProps = {
  events: IEvent[]
  onCardClickHandler: (event: IEvent) => void
}

type EventTimelineItemProps = Pick<EventTimelineProps, "onCardClickHandler"> & {
  event: IEvent
  index: number
}

export type EventTimelineCardProps = Pick<
  EventTimelineItemProps,
  "event" | "onCardClickHandler"
>

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

const EventTimelineItem = ({
  event,
  index,
  onCardClickHandler,
}: EventTimelineItemProps) => {
  const eventName = event.name
  return (
    <TimelineItem key={index}>
      <TimelineOppositeContent>
        <Typography variant="overline">{eventName}</Typography>
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

const EventTimelineItemCard = ({
  event,
  onCardClickHandler,
}: EventTimelineCardProps) => {
  const classes = EventTimelineStyles()
  const { name, description, photoURI } = event
  return (
    <Card className={classes.card} onClick={() => onCardClickHandler(event)}>
      {photoURI && (
        <CardMedia>
          <img src={photoURI} alt={name} className={classes.cardImage} />
        </CardMedia>
      )}
      <CardContent className={classes.cardContent}>
        <Typography variant="caption">{description}</Typography>
      </CardContent>
    </Card>
  )
}
export default EventTimeline
