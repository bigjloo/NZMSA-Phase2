import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import {
  setEventSelected,
  toggleIsCardDialogOpen,
} from "../../store/cardReducer"
import { IEvent } from "../../store/eventReducer"

import EventTimeline from "./EventTimeline"
import CardDialog from "../Dialogs/CardDialog/CardDialog"

const EventTimelineContainer = ({ events }: { events: IEvent[] }) => {
  const dispatch = useAppDispatch()

  const isCardDialogOpen = useAppSelector<boolean>(
    (state) => state.card.isCardDialogOpen
  )
  const eventSelected = useAppSelector<IEvent>(
    (state) => state.card.eventSelected!
  )

  // Set user selected event for Card Dialog
  const onCardClickHandler = (event: IEvent) => {
    dispatch(setEventSelected(event))
  }

  const cardDialogCloseHandler = () => dispatch(toggleIsCardDialogOpen())

  return (
    <>
      <EventTimeline events={events} onCardClickHandler={onCardClickHandler} />
      <CardDialog
        event={eventSelected}
        isCardDialogOpen={isCardDialogOpen}
        cardDialogCloseHandler={cardDialogCloseHandler}
      />
    </>
  )
}

export default EventTimelineContainer
