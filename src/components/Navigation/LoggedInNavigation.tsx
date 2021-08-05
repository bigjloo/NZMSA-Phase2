import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"

import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import ShareIcon from "@material-ui/icons/Share"
import SaveAltIcon from "@material-ui/icons/SaveAlt"

import { toggleEventDialog, toggleShareDialog } from "../../store/dialogReducer"
import { IEvent } from "../../common/types_interfaces"

const LoggedInNavigation = () => {
  // TODO
  // const [publish] = useMutation()
  const events = useAppSelector<IEvent[]>((state) => state.events.events)
  const dispatch = useAppDispatch()

  const openEventDialog = () => dispatch(toggleEventDialog())

  const openShareDialog = () => dispatch(toggleShareDialog())

  const saveEventsHandler = () => {
    // TODO Save events
    const saveEvents = async () => {}
    saveEvents()
  }
  return (
    <>
      <BottomNavigationAction
        label="Add"
        icon={<AddCircleOutlineIcon onClick={openEventDialog} />}
        showLabel
      />
      <BottomNavigationAction
        label="Save"
        icon={<SaveAltIcon />}
        onClick={saveEventsHandler}
        showLabel
      />
      <BottomNavigationAction
        label="Share"
        icon={<ShareIcon />}
        onClick={openShareDialog}
        showLabel
      />
    </>
  )
}

export default LoggedInNavigation
