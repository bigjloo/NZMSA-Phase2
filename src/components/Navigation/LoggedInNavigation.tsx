import { useMemo, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"

import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import ShareIcon from "@material-ui/icons/Share"
import SaveAltIcon from "@material-ui/icons/SaveAlt"

import { toggleEventDialog, toggleShareDialog } from "../../store/dialogReducer"
import { IEvent } from "../../common/types_interfaces"
import { useMutation } from "@apollo/client"
import { SET_EVENTS } from "../../apollo-client/query"
import { setPublishKey } from "../../store/eventReducer"
import { openNotification } from "../../store/notificationReducer"

const LoggedInNavigation = () => {
  const [events, publishKey] = useAppSelector((state) => [
    state.events.events,
    state.events.publishKey,
  ])

  const [saveEvents] = useMutation(SET_EVENTS, {
    variables: { events, publishKey },
  })

  const dispatch = useAppDispatch()

  const key = useMemo(() => {
    return [...Array(8)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("")
  }, [])

  const openEventDialog = () => dispatch(toggleEventDialog())

  // Save events to backend when ShareDialog is toggled, after
  // publishkey is set by redux
  useEffect(() => {
    saveEvents()
  }, [publishKey, saveEvents])

  const openShareDialog = () => {
    dispatch(setPublishKey(key))
    dispatch(toggleShareDialog())
  }

  const saveEventsHandler = () => {
    saveEvents()
    dispatch(openNotification("Events saved!!!"))
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
