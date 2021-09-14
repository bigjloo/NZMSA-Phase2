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
  name: string
  description: string
}

type EventCardMediaProps = {
  photoURI: string
}

export type EventCardDialogProps = {
  event: IEvent | undefined
  isCardDialogOpen: boolean
  cardDialogCloseHandler: () => void
}

const EventCardDialog = ({
  event,
  isCardDialogOpen,
  cardDialogCloseHandler,
}: EventCardDialogProps) => {
  const classes = CardDialogStyles()
  const renderEventCard = (event: IEvent) => {
    return (
      <DialogContent className={classes.dialog}>
        <Card className={classes.card}>
          {event.photoURI && (
            <CardMedia>
              <EventCardMedia photoURI={event.photoURI} />
            </CardMedia>
          )}
          <CardContent>
            <EventCardContent
              name={event.name}
              description={event.description}
            />
          </CardContent>
          <CardActions>
            <LikeButton />
          </CardActions>
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

const EventCardMedia = ({ photoURI }: EventCardMediaProps) => {
  const classes = CardDialogStyles()
  return (
    <>
      <img className={classes.cardImage} src={photoURI} alt="card media" />
    </>
  )
}

const EventCardContent = ({ name, description }: EventCardContentProps) => {
  return (
    <>
      <Typography variant="h6" component="h6">
        {name}
      </Typography>
      <Typography variant="body1" component="p">
        {description}
      </Typography>
    </>
  )
}

// onClick function to be implemented
const LikeButton = () => {
  const classes = CardDialogStyles()
  return (
    <Button
      children="Like"
      startIcon={<FavoriteIcon className={classes.likeIcon} />}
    />
  )
}

export default EventCardDialog
