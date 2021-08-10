import EventTimeline from "../Event/EventTimeline"
import { useAppSelector } from "../../store/storeHooks"

export interface IEvent {
  name: string
  description: string
  photoURI: string | null
}

const UserCanvas = () => {
  const events = useAppSelector<IEvent[]>((store) => store.events.events)

  return (
    <>
      <EventTimeline events={events} />
    </>
  )
}

export default UserCanvas
