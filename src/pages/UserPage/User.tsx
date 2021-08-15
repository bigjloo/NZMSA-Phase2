import EventTimeline from "../../components/EventTimeline/EventTimeline"
import EventDialog from "../../components/EventDialog/EventDialog"
import ShareDialogContainer from "../../components/ShareDialog/ShareDialogContainer"
import { IEvent } from "../../store/eventReducer"

type UserProps = {
  events: IEvent[]
}

const User = ({ events }: UserProps) => {
  return (
    <>
      <EventTimeline events={events} />
      <EventDialog />
      <ShareDialogContainer />
    </>
  )
}

export default User
