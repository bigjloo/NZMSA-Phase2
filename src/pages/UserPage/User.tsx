import EventTimeline from "../../components/EventTimeline/EventTimeline"
import EventDialogContainer from "../../components/Dialogs/EventDialog/EventDialogContainer"
import ShareDialogContainer from "../../components/Dialogs/ShareDialog/ShareDialogContainer"
import { IEvent } from "../../store/eventReducer"

type UserProps = {
  events: IEvent[]
}

const User = ({ events }: UserProps) => {
  return (
    <>
      <EventTimeline events={events} />
      <EventDialogContainer />
      <ShareDialogContainer />
    </>
  )
}

export default User
