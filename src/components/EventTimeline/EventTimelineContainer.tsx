import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import {
  setEventSelected,
  toggleIsCardDialogOpen,
} from "../../store/cardReducer"
import { IEvent } from "../../store/eventReducer"

import EventTimeline from "./EventTimeline"
import CardDialog from "../Dialogs/CardDialog/CardDialog"

const EventTimelineContainer = ({ events }: { events: IEvent[] }) => {
  const isCardDialogOpen = useAppSelector(
    (state) => state.card.isCardDialogOpen
  )
  const eventSelected = useAppSelector((state) => state.card.eventSelected)

  const dispatch = useAppDispatch()

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
