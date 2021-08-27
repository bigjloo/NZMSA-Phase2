import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Skeleton from "@material-ui/lab/Skeleton"

import { IEvent } from "../../store/eventReducer"
import EventTimelineStyles from "./EventTimelineStyles"

export type EventTimelineCardProps = {
  event: IEvent
  onCardClickHandler: (event: IEvent) => void
}

const EventTimelineCard = (props: EventTimelineCardProps) => {
  const classes = EventTimelineStyles()
  const { event, onCardClickHandler } = props

  return (
    <Card className={classes.card} onClick={() => onCardClickHandler(event)}>
      {event.photoURI ? (
        <CardMedia>
          <img
            src={event.photoURI}
            alt={event.name}
            className={classes.cardImage}
          />
        </CardMedia>
      ) : (
        <Skeleton className={classes.cardImage} variant="rect" />
      )}

      <CardContent className={classes.cardContent}>
        <Typography variant="caption">{event.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default EventTimelineCard
