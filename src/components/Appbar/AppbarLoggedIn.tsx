import { useMemo, useEffect } from "react"
import AddIcon from "@material-ui/icons/Add"
import { useAppSelector, useAppDispatch } from "../../store/storeHooks"
import { setPublishKey } from "../../store/eventReducer"
import { openNotification } from "../../store/notificationReducer"
import { toggleShareDialog, toggleEventDialog } from "../../store/dialogReducer"
import { useMutation } from "@apollo/client"
import { SET_EVENTS } from "../../apollo-client/mutations"
import { IEvent } from "../../store/eventReducer"
import { IconButton, Toolbar, Fab } from "@material-ui/core"
import BackdropContainer from "../Backdrop/BackdropContainer"
import Button from "@material-ui/core/Button"
import AppbarLoggedInStyles from "./AppbarLoggedInStyles"
import { AppBar } from "@material-ui/core"

const AppbarLoggedIn = () => {
  const classes = AppbarLoggedInStyles()
  const events = useAppSelector<IEvent[]>((state) => state.events.events)
  const publishKey = useAppSelector<string>((state) => state.events.publishKey)

  const dispatch = useAppDispatch()

  const [saveEvents, { loading, error }] = useMutation(SET_EVENTS, {
    variables: { events, publishKey },
  })

  // Toggles Event Dialog
  const onOpenEventDialog = () => dispatch(toggleEventDialog())

  // Save events without publishKey
  const onSaveEvents = async () => {
    await saveEvents()
    dispatch(openNotification("Events saved!"))
  }

  // Sets key as publishKey in local state
  // and opens Share Dialog
  const onOpenShareDialog = () => {
    dispatch(setPublishKey(key))
    dispatch(toggleShareDialog())
  }

  // Generates 8 random alphanumeric char string
  const key = useMemo(() => {
    return [...Array(8)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("")
  }, [])

  // Save events to backend after
  // publishkey is set by toggling Share Dialog
  useEffect(() => {
    if (publishKey) {
      saveEvents()
    }
  }, [publishKey, saveEvents])

  if (loading) return <BackdropContainer loading={loading} />

  if (error) {
    dispatch(openNotification("Error when saving events! Please try again"))
  }

  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.iconButton}
          edge="start"
          onClick={onSaveEvents}
        >
          <Button>SAVE</Button>
        </IconButton>
        <Fab className={classes.fabButton}>
          <AddIcon onClick={onOpenEventDialog} fontSize="large" />
        </Fab>
        <IconButton
          className={classes.iconButton}
          edge="end"
          onClick={onOpenShareDialog}
        >
          <Button>PUBLISH</Button>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppbarLoggedIn
