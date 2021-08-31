import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from "@material-ui/core/Button"
import { IEvent } from "../../../store/eventReducer"

export type EventDialogListProps = {
  events: IEvent[]
  onRemoveEvent: (index: number) => void
}

type EventDialogListItemProps = {
  eventName: string
  eventDescription: string
  index: number
  onRemoveEvent: (index: number) => void
}

const EventDialogList = ({ events, onRemoveEvent }: EventDialogListProps) => {
  const renderEventDialogListItems = () => {
    return events.map((event, index) => {
      return (
        <>
          <EventDialogListItem
            eventName={event.name}
            eventDescription={event.description}
            index={index}
            onRemoveEvent={onRemoveEvent}
          />
          <Divider variant="middle" component="li" key={`d-${index}`} />
        </>
      )
    })
  }

  return <List>{renderEventDialogListItems()}</List>
}

const EventDialogListItem = ({
  eventName,
  eventDescription,
  index,
  onRemoveEvent,
}: EventDialogListItemProps) => {
  const removeEventButtonText = "X"

  return (
    <ListItem key={index}>
      <ListItemText primary={eventName} secondary={eventDescription} />
      <Button color="secondary" onClick={() => onRemoveEvent(index)}>
        {removeEventButtonText}
      </Button>
    </ListItem>
  )
}

export default EventDialogList
