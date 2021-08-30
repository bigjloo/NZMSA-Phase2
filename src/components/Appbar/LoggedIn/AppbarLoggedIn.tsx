import { useMemo, useEffect } from "react"

import { useMutation } from "@apollo/client"
import { SET_EVENTS } from "../../../apollo-client/mutations"

import AddIcon from "@material-ui/icons/Add"
import { IconButton, Toolbar, Fab, AppBar, Button } from "@material-ui/core"

import { useAppSelector, useAppDispatch } from "../../../store/storeHooks"
import { setPublishKey, IEvent } from "../../../store/eventReducer"
import { openNotification } from "../../../store/notificationReducer"
import {
  toggleShareDialog,
  toggleEventDialog,
} from "../../../store/dialogReducer"

import Backdrop from "../../Backdrop/BackdropContainer"
import AppbarLoggedInStyles from "./AppbarLoggedInStyles"

type SaveButtonProps = {
  onSaveEvents: () => void
}

type EventButtonProps = {
  onOpenEventDialog: () => void
}

type ShareButtonProps = {
  onOpenShareDialog: () => void
}

const AppbarLoggedIn = () => {
  const dispatch = useAppDispatch()
  const classes = AppbarLoggedInStyles()

  const events = useAppSelector<IEvent[]>((state) => state.events.events)
  const publishKey = useAppSelector<string>((state) => state.events.publishKey)

  const [saveEvents, { loading, error }] = useMutation(SET_EVENTS, {
    variables: { events, publishKey },
  })

  // Save events to backend after ShareDialog is toggled
  useEffect(() => {
    publishKey && saveEvents()
  }, [publishKey, saveEvents])

  // Save user events to backend without publishKey
  const onSaveEvents = async () => {
    await saveEvents()
    if (!loading && !error) {
      dispatch(
        openNotification({
          message: "Events saved!",
          alertType: "success",
        })
      )
    }
  }

  // Toggles Event Dialog
  const onOpenEventDialog = () => dispatch(toggleEventDialog())

  // Opens Share Dialog and sets key as publishKey in local state
  const onOpenShareDialog = () => {
    dispatch(toggleShareDialog())
    dispatch(setPublishKey(key))
  }

  const key = useMemo(() => generateKey(), [])

  if (loading) return <Backdrop loading={loading} />

  if (error) {
    dispatch(
      openNotification({
        message: "Error when saving events! Please try again",
        alertType: "error",
      })
    )
  }

  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <SaveButton onSaveEvents={onSaveEvents} />
        <EventButton onOpenEventDialog={onOpenEventDialog} />
        <ShareButton onOpenShareDialog={onOpenShareDialog} />
      </Toolbar>
    </AppBar>
  )
}

// Generates 8 random alphanumeric char string
const generateKey = () =>
  [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join("")

const SaveButton = ({ onSaveEvents }: SaveButtonProps) => {
  const classes = AppbarLoggedInStyles()
  const saveButtonText = "Save"

  return (
    <IconButton
      className={classes.iconButton}
      edge="start"
      onClick={onSaveEvents}
    >
      <Button>{saveButtonText}</Button>
    </IconButton>
  )
}

const EventButton = ({ onOpenEventDialog }: EventButtonProps) => {
  const classes = AppbarLoggedInStyles()
  return (
    <Fab className={classes.fabButton}>
      <AddIcon onClick={onOpenEventDialog} fontSize="large" />
    </Fab>
  )
}

const ShareButton = ({ onOpenShareDialog }: ShareButtonProps) => {
  const classes = AppbarLoggedInStyles()
  const shareButtonText = "Publish"

  return (
    <IconButton
      className={classes.iconButton}
      edge="end"
      onClick={onOpenShareDialog}
    >
      <Button>{shareButtonText}</Button>
    </IconButton>
  )
}

export default AppbarLoggedIn
