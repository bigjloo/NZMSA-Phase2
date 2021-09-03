import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import {
  setEventSelected,
  toggleIsCardDialogOpen,
} from "../../store/cardReducer"
import { IEvent } from "../../store/eventReducer"
import EventTimeline from "./EventTimeline"
import EventCardDialog from "../Dialogs/EventCardDialog/EventCardDialog"

type EventTimelineContainerProps = {
  events: IEvent[]
}

const EventTimelineContainer = ({ events }: EventTimelineContainerProps) => {
  const dispatch = useAppDispatch()
  const isCardDialogOpen = useAppSelector<boolean>(
    (state) => state.card.isCardDialogOpen
  )
  const eventSelected = useAppSelector<IEvent>(
    (state) => state.card.eventSelected!
  )

  // Sets user selected event to be used for Card Dialog
  const onCardClickHandler = (event: IEvent) => {
    dispatch(setEventSelected(event))
  }

  const cardDialogCloseHandler = () => dispatch(toggleIsCardDialogOpen())

  return (
    <>
      <EventTimeline events={events} onCardClickHandler={onCardClickHandler} />
      <EventCardDialog
        event={eventSelected}
        isCardDialogOpen={isCardDialogOpen}
        cardDialogCloseHandler={cardDialogCloseHandler}
      />
    </>
  )
}

export default EventTimelineContainer
