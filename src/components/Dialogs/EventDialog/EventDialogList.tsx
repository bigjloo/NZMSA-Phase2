import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import { IEvent } from "../../../store/eventReducer"

export type EventListProps = {
  events: IEvent[]
  onRemoveEvent: (index: number) => void
}

const EventDialogList = ({ events, onRemoveEvent }: EventListProps) => {
  return (
    <List>
      {events.map((event, index) => (
        <>
          <ListItem key={index}>
            <ListItemText primary={event.name} secondary={event.description} />
            <Button color="secondary" onClick={() => onRemoveEvent(index)}>
              X
            </Button>
          </ListItem>
          <Divider variant="middle" component="li" key={`d-${index}`} />
        </>
      ))}
    </List>
  )
}

export default EventDialogList
