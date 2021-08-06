import { useAppSelector } from "../../store/storeHooks"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"

import { IEvent } from "../../common/types_interfaces"

export type EventListProps = {
  onRemoveEvent: (index: number) => void
}

const EventList = ({ onRemoveEvent }: EventListProps) => {
  const events = useAppSelector<IEvent[]>((state) => state.events.events)

  return (
    <List>
      {events.map((event, index) => (
        <>
          <ListItem key={index}>
            <ListItemText primary={event.name} secondary={event.description} />
            <Button onClick={() => onRemoveEvent(index)}>x</Button>
          </ListItem>
          <Divider variant="middle" component="li" key={`d-${index}`} />
        </>
      ))}
    </List>
  )
}

export default EventList
