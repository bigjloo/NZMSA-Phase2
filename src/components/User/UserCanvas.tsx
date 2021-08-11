import EventTimeline from "../Event/EventTimeline"
import { useAppSelector } from "../../store/storeHooks"
import { IEvent } from "../../store/eventReducer"

// Style
const UserCanvas = () => {
  const events = useAppSelector<IEvent[]>((store) => store.events.events)

  return (
    <>
      <EventTimeline events={events} />
    </>
  )
}

export default UserCanvas
