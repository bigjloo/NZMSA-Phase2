import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { IEvent } from "../../store/eventReducer"
import { openNotification } from "../../store/notificationReducer"
import BackdropContainer from "../../components/Backdrop/BackdropContainer"
import useUserQuery from "../../utils/hooks/useUserQuery"
import UserPage from "./UserPage"

const UserPageContainer = () => {
  const dispatch = useAppDispatch()
  const events = useAppSelector<IEvent[]>((store) => store.events.events)

  const { loading, error } = useUserQuery()

  if (error) {
    dispatch(
      openNotification({
        message: "Error fetching data. Please try again",
        alertType: "error",
      })
    )
  }

  if (loading) return <BackdropContainer loading={loading} />

  return <UserPage events={events} />
}

export default UserPageContainer
