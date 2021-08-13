import { useMemo, useEffect } from "react"
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import AddIcon from "@material-ui/icons/Add"
// import ShareIcon from "@material-ui/icons/Share"
// import SaveAltIcon from "@material-ui/icons/SaveAlt"
import { useAppSelector, useAppDispatch } from "../../store/storeHooks"
import { setPublishKey } from "../../store/eventReducer"
import { openNotification } from "../../store/notificationReducer"
import { toggleShareDialog, toggleEventDialog } from "../../store/dialogReducer"
import { useMutation } from "@apollo/client"
import { SET_EVENTS } from "../../apollo-client/mutations"
import { IEvent } from "../../store/eventReducer"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import { IconButton, Toolbar, Fab } from "@material-ui/core"
import BackdropContainer from "../UI/BackdropContainer"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigationAction: {
      color: theme.palette.background.default,
    },

    navigationAddEvent: {
      position: "absolute",
      top: "-200",
      margin: "0 auto",
    },

    fabButton: {
      position: "absolute",
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
      backgroundColor: theme.palette.secondary.light,
    },

    toolbar: {
      flex: "row",
      justifyContent: "space-between",
    },

    iconButton: {
      // color: theme.palette.secondary.contrastText,
      fontSize: "1rem",
      padding: "0 2rem",
    },
  })
)

const LoggedInNavigation = () => {
  const classes = useStyles()
  const events = useAppSelector<IEvent[]>((state) => state.events.events)
  const publishKey = useAppSelector<string>((state) => state.events.publishKey)

  const dispatch = useAppDispatch()

  const [saveEvents, { loading, error }] = useMutation(SET_EVENTS, {
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

  if (loading) return <BackdropContainer loading={loading} />

  if (error) {
    dispatch(openNotification("Error when saving events! Please try again"))
  }

  return (
    <Toolbar className={classes.toolbar}>
      <IconButton
        className={classes.iconButton}
        edge="start"
        onClick={saveEventsHandler}
        // className={classes.navigationAction}
        // label="Save"
        // icon={<SaveAltIcon />}
        // onClick={saveEventsHandler}
        // showLabel
      >
        <Button>SAVE</Button>
      </IconButton>
      <Fab className={classes.fabButton}>
        {/* className={classes.navigationAddEvent}
        icon={
          <AddCircleOutlineIcon onClick={openEventDialog} fontSize="large" />
        }
        showLabel */}
        <AddIcon onClick={openEventDialog} fontSize="large" />
      </Fab>
      <IconButton
        className={classes.iconButton}
        edge="end"
        onClick={openShareDialog}
      >
        <Button>PUBLISH</Button>
      </IconButton>
    </Toolbar>
  )
}

export default LoggedInNavigation
