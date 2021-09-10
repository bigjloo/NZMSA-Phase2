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

type EventDialogListItemProps = Pick<EventDialogListProps, "onRemoveEvent"> & {
  eventName: string
  eventDescription: string
  index: number
}

type removeEventButtonProps = Pick<
  EventDialogListItemProps,
  "onRemoveEvent" | "index"
>

const EventDialogList = ({ events, onRemoveEvent }: EventDialogListProps) => {
  return (
    <List>
      {events.map((event, index) => {
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
      })}
    </List>
  )
}

const EventDialogListItem = ({
  eventName,
  eventDescription,
  index,
  onRemoveEvent,
}: EventDialogListItemProps) => {
  return (
    <ListItem key={index}>
      <ListItemText primary={eventName} secondary={eventDescription} />
      <RemoveEventButton onRemoveEvent={onRemoveEvent} index={index} />
    </ListItem>
  )
}

const RemoveEventButton = ({
  onRemoveEvent,
  index,
}: removeEventButtonProps) => {
  return (
    <Button
      color="secondary"
      onClick={() => onRemoveEvent(index)}
      children="X"
    />
  )
}

export default EventDialogList
