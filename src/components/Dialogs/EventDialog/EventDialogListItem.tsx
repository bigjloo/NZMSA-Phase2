import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from "@material-ui/core/Button"
import { IEvent } from "../../../store/eventReducer"

type EventDialogListItemProps = {
  event: IEvent
  index: number
  onRemoveEvent: (index: number) => void
}

const EventDialogListItem = (props: EventDialogListItemProps) => {
  const { event, index, onRemoveEvent } = props
  const removeEventButtonText = "X"

  return (
    <ListItem key={index}>
      <ListItemText primary={event.name} secondary={event.description} />
      <Button color="secondary" onClick={() => onRemoveEvent(index)}>
        {removeEventButtonText}
      </Button>
    </ListItem>
  )
}

export default EventDialogListItem
