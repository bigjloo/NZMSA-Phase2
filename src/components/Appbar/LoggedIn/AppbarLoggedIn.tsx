import { Toolbar, AppBar } from "@material-ui/core"

import { useAppDispatch } from "../../../store/storeHooks"
import { openNotification } from "../../../store/notificationReducer"

import Backdrop from "../../Backdrop/BackdropContainer"
import AppbarLoggedInStyles from "./AppbarLoggedInStyles"
import SaveButtonContainer from "./SaveButtonContainer"
import EventButtonContainer from "./EventButtonContainer"
import ShareButtonContainer from "./ShareButtonContainer"
import { useSaveEvents } from "./hooks"

const AppbarLoggedIn = () => {
  const dispatch = useAppDispatch()
  const appBarStyles = AppbarLoggedInStyles().appBar
  const toolbarStyles = AppbarLoggedInStyles().toolbar
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
    <AppBar color="inherit" className={appBarStyles}>
      <Toolbar className={toolbarStyles}>
        <SaveButtonContainer />
        <EventButtonContainer />
        <ShareButtonContainer />
      </Toolbar>
    </AppBar>
  )
}

export default AppbarLoggedIn
