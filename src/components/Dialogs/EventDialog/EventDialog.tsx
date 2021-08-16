import Dialog from "@material-ui/core/Dialog"
import EventDialogContent from "./EventDialogContent"
import EventDialogList from "./EventDialogList"
import { IEvent } from "../../../store/eventReducer"
import { ChangeEvent } from "react"

export type EventDialogProps = {
  isEventDialogOpen: boolean
  toggleEventDialogHandler: () => void
  events: IEvent[]
  onRemoveEvent: (index: number) => void
  onAddEvent: () => void
  nameInput: string
  descriptionInput: string
  onNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDescriptionInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const EventDialog = ({
  isEventDialogOpen,
  toggleEventDialogHandler,
  events,
  onRemoveEvent,
  onAddEvent,
  nameInput,
  descriptionInput,
  onNameInputChange,
  onDescriptionInputChange,
}: EventDialogProps) => {
  return (
    <Dialog open={isEventDialogOpen} onClose={toggleEventDialogHandler}>
      <EventDialogList events={events} onRemoveEvent={onRemoveEvent} />
      <EventDialogContent
        title="Add Event"
        onAddEvent={onAddEvent}
        toggleEventDialogHandler={toggleEventDialogHandler}
        nameInput={nameInput}
        descriptionInput={descriptionInput}
        onNameInputChange={onNameInputChange}
        onDescriptionInputChange={onDescriptionInputChange}
      />
    </Dialog>
  )
}

export default EventDialog
