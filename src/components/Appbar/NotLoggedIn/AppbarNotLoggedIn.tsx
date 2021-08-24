import { Toolbar, AppBar, IconButton } from "@material-ui/core"

import { useAppDispatch } from "../../../store/storeHooks"
import { toggleLoginDialog } from "../../../store/dialogReducer"
import AppbarNotLoggedInStyles from "./AppbarNotLoggedInStyles"

const AppbarNotLoggedIn = () => {
  const classes = AppbarNotLoggedInStyles()
  const dispatch = useAppDispatch()

  // Opens Login Dialog
  const openLoginDialog = () => dispatch(toggleLoginDialog())

  return (
    <AppBar color="inherit" className={classes.mainAppbar}>
      <Toolbar>
        <IconButton className={classes.loginButton} onClick={openLoginDialog}>
          LOGIN
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppbarNotLoggedIn
