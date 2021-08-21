import { IEvent } from "../../store/eventReducer"
import EventTimeline from "../../components/EventTimeline/EventTimeline"
import EventDialogContainer from "../../components/Dialogs/EventDialog/EventDialogContainer"
import ShareDialogContainer from "../../components/Dialogs/ShareDialog/ShareDialogContainer"
import { getRandomMoment } from "../../api/get-random-moment"

export type UserProps = {
  events: IEvent[]
}
// TODO random moments quote if events is empty
const User = ({ events }: UserProps) => {
  const clickHandler = () => {
    const data = getRandomMoment()
    console.log(data)
  }
  return (
    <>
      <EventTimeline events={events} />
      <button onClick={clickHandler}>get random quote</button>
      <EventDialogContainer />
      <ShareDialogContainer />
    </>
  )
}

export default User
