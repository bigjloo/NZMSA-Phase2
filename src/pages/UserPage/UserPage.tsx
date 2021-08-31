import { IEvent } from "../../store/eventReducer"
import EventTimelineContainer from "../../components/EventTimeline/EventTimelineContainer"
import EventDialogContainer from "../../components/Dialogs/EventDialog/EventDialogContainer"
import ShareDialogContainer from "../../components/Dialogs/ShareDialog/ShareDialogContainer"

export type UserProps = {
  events: IEvent[]
}

const UserPage = ({ events }: UserProps) => {
  return (
    <>
      <EventTimelineContainer events={events} />
      <EventDialogContainer />
      <ShareDialogContainer />
    </>
  )
}

export default UserPage
