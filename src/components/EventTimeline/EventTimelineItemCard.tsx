import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import { IEvent } from "../../store/eventReducer"
import EventTimelineStyles from "./EventTimelineStyles"

export type EventTimelineCardProps = {
  // event: IEvent
  photoURI?: string
  eventDescription: string
  onCardClickHandler: (event: IEvent) => void
}

const EventTimelineItemCard = ({
  photoURI,
  eventDescription,
  onCardClickHandler,
}: EventTimelineCardProps) => {
  const classes = EventTimelineStyles()
  return (
    <Card className={classes.card} onClick={() => onCardClickHandler(event)}>
      {photoURI && (
        <CardMedia>
          <img src={photoURI} alt={event.name} className={classes.cardImage} />
        </CardMedia>
      )}
      <CardContent className={classes.cardContent}>
        <Typography variant="caption">{eventDescription}</Typography>
      </CardContent>
    </Card>
  )
}

export default EventTimelineItemCard
