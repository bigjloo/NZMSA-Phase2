import { useMemo, useEffect, MouseEventHandler } from "react"

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

  const key = useMemo(() => generateKey(), [])

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

  // Sets key as publishKey in local state
  // and opens Share Dialog
  const onOpenShareDialog = () => {
    dispatch(setPublishKey(key))
    dispatch(toggleShareDialog())
  }

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
        <IconButton
          className={classes.iconButton}
          edge="start"
          onClick={onSaveEvents}
        >
          <Button>save</Button>
        </IconButton>
        <Fab className={classes.fabButton}>
          <AddIcon onClick={onOpenEventDialog} fontSize="large" />
        </Fab>
        <IconButton
          className={classes.iconButton}
          edge="end"
          onClick={onOpenShareDialog}
        >
          <Button>publish</Button>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

// type ShareIconButtonProps = {
//   buttonText: string
//   edge: false | "start" | "end" | undefined
//   clickHandler: MouseEventHandler<HTMLButtonElement>
// }

// export const ShareIconButton = (props: ShareIconButtonProps) => {
//   const { buttonText, edge, clickHandler } = props

//   return (
//     <IconButton edge={edge} onClick={clickHandler} onClick={clickHandler}>
//       <Button>{buttonText}</Button>
//     </IconButton>
//   )
// }

export default AppbarLoggedIn

// Generates 8 random alphanumeric char string
const generateKey = () =>
  [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join("")
