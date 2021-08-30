import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Typography from "@material-ui/core/Typography"
import FavoriteIcon from "@material-ui/icons/Favorite"

import { IEvent } from "../../../store/eventReducer"
import CardDialogStyles from "./EventCardDialogStyles"

type EventCardContentProps = {
  event: IEvent
}

export type CardDialogProps = {
  event: IEvent | undefined
  isCardDialogOpen: boolean
  cardDialogCloseHandler: () => void
}

const EventCardDialog = ({
  event,
  isCardDialogOpen,
  cardDialogCloseHandler,
}: CardDialogProps) => {
  const classes = CardDialogStyles()
  const renderEventCard = (event: IEvent) => {
    return (
      <DialogContent className={classes.dialog}>
        <Card className={classes.card}>
          {event.photoURI && (
            <CardMedia>
              <img
                className={classes.cardImage}
                src={event.photoURI}
                alt="card media"
              />
            </CardMedia>
          )}
          <EventCardContent event={event} />
          <EventCardActions />
        </Card>
      </DialogContent>
    )
  }

  return (
    <Dialog open={isCardDialogOpen} onClose={cardDialogCloseHandler}>
      {event && renderEventCard(event)}
    </Dialog>
  )
}

const EventCardContent = ({ event }: EventCardContentProps) => {
  return (
    <CardContent>
      <Typography variant="h6" component="h6">
        {event.name}
      </Typography>
      <Typography variant="body1" component="p">
        {event.description}
      </Typography>
    </CardContent>
  )
}

const EventCardActions = () => {
  const classes = CardDialogStyles()
  const likeButtonText = "Like"
  return (
    <CardActions>
      <Button startIcon={<FavoriteIcon className={classes.likeIcon} />}>
        {likeButtonText}
      </Button>
    </CardActions>
  )
}

export default EventCardDialog
