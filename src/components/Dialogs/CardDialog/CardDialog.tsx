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
import CardDialogStyles from "./CardDialogStyles"

export type CardDialogProps = {
  event: IEvent | undefined
  isCardDialogOpen: boolean
  cardDialogCloseHandler: () => void
}

const CardDialog = (props: CardDialogProps) => {
  const classes = CardDialogStyles()

  const { event, isCardDialogOpen, cardDialogCloseHandler } = props

  return (
    <Dialog open={isCardDialogOpen} onClose={cardDialogCloseHandler}>
      {event && (
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
            <CardContent>
              <Typography variant="h6" component="h6">
                {event.name}
              </Typography>
              <Typography variant="body1" component="p">
                {event.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button startIcon={<FavoriteIcon className={classes.likeIcon} />}>
                Like
              </Button>
            </CardActions>
          </Card>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default CardDialog
