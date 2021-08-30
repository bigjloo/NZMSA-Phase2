import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import { IEvent } from "../../../store/eventReducer"
import EventDialogListItem from "./EventDialogListItem"

export type EventDialogListProps = {
  events: IEvent[]
  onRemoveEvent: (index: number) => void
}

const EventDialogList = ({ events, onRemoveEvent }: EventDialogListProps) => {
  const renderEventDialogListItems = () => {
    return events.map((event, index) => {
      return (
        <>
          <EventDialogListItem
            event={event}
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

export default EventDialogList
