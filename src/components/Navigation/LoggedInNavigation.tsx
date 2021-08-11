import { useMemo, useEffect } from "react"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import ShareIcon from "@material-ui/icons/Share"
import SaveAltIcon from "@material-ui/icons/SaveAlt"
import { useAppSelector, useAppDispatch } from "../../store/storeHooks"
import { setPublishKey } from "../../store/eventReducer"
import { openNotification } from "../../store/notificationReducer"
import { toggleShareDialog, toggleEventDialog } from "../../store/dialogReducer"
import { useMutation } from "@apollo/client"
import { SET_EVENTS } from "../../apollo-client/query"
import { IEvent } from "../../store/eventReducer"

const LoggedInNavigation = () => {
  const events = useAppSelector<IEvent[]>((state) => state.events.events)
  const publishKey = useAppSelector<string>((state) => state.events.publishKey)

  const dispatch = useAppDispatch()

  const [saveEvents] = useMutation(SET_EVENTS, {
    variables: { events, publishKey },
  })

  const openEventDialog = () => dispatch(toggleEventDialog())

  // Save events without publishKey
  const saveEventsHandler = async () => {
    await saveEvents()
    dispatch(openNotification("Events saved!!!"))
  }

  // Sets key as publishKey in local state
  // and opens Share Dialog
  const openShareDialog = () => {
    dispatch(setPublishKey(key))
    dispatch(toggleShareDialog())
  }

  // Generates 8 random alphanumeric char string
  const key = useMemo(() => {
    return [...Array(8)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("")
  }, [])

  // Save events to backend when ShareDialog is toggled, after
  // publishkey is set by Redux
  useEffect(() => {
    if (publishKey) {
      saveEvents()
    }
  }, [publishKey, saveEvents])

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
