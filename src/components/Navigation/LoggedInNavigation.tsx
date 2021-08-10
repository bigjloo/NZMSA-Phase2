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

const LoggedInNavigation = () => {
  const events = useAppSelector((state) => state.events.events)
  const publishKey = useAppSelector((state) => state.events.publishKey)

  console.log("inside LoggedInNavigationContainer.tsx")

  const dispatch = useAppDispatch()

  const openEventDialog = () => dispatch(toggleEventDialog())

  // Sends events from local state to backend
  const [saveEvents, { error }] = useMutation(SET_EVENTS, {
    variables: { events, publishKey },
  })

  if (error) console.log(error.message)

  // Save events without publishKey
  const saveEventsHandler = () => {
    saveEvents()
    dispatch(openNotification("Events saved!!!"))
  }

  // Sets key to publish key in state
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
  // publishkey is set by redux
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
