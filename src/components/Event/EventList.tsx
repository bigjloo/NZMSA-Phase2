import { useAppSelector } from "../../store/storeHooks"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { IEvent } from "../../store/eventReducer"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    removeEventButton: {
      color: theme.palette.secondary.main,
    },
  })
)

export type EventListProps = {
  onRemoveEvent: (index: number) => void
}

const EventList = ({ onRemoveEvent }: EventListProps) => {
  const classes = useStyles()
  const events = useAppSelector<IEvent[]>((state) => state.events.events)

  // TODO style
  return (
    <List>
      {events.map((event, index) => (
        <>
          <ListItem key={index}>
            <ListItemText primary={event.name} secondary={event.description} />
            <Button
              className={classes.removeEventButton}
              onClick={() => onRemoveEvent(index)}
            >
              x
            </Button>
          </ListItem>
          <Divider variant="middle" component="li" key={`d-${index}`} />
        </>
      ))}
    </List>
  )
}

export default EventList
