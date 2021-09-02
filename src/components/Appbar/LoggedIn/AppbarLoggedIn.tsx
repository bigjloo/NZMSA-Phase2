import { Toolbar, AppBar } from "@material-ui/core"

import { useAppDispatch } from "../../../store/storeHooks"
import { openNotification } from "../../../store/notificationReducer"

import Backdrop from "../../Backdrop/BackdropContainer"
import AppbarLoggedInStyles from "./AppbarLoggedInStyles"
import SaveButtonContainer from "./SaveButtonContainer"
import EventButtonContainer from "./EventButtonContainer"
import ShareButtonContainer from "./ShareButtonContainer"
import useSaveEvents from "../../../utils/hooks/useSaveEvents"

const AppbarLoggedIn = () => {
  const dispatch = useAppDispatch()
  const classes = AppbarLoggedInStyles()
  const { loading, error } = useSaveEvents()

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
        <SaveButtonContainer />
        <EventButtonContainer />
        <ShareButtonContainer />
      </Toolbar>
    </AppBar>
  )
}

export default AppbarLoggedIn
