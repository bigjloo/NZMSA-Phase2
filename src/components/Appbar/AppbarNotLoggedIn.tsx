import IconButton from "@material-ui/core/IconButton"
import { useAppDispatch } from "../../store/storeHooks"
import { toggleLoginDialog } from "../../store/dialogReducer"
import { Toolbar } from "@material-ui/core"
import { AppbarNotLoggedInStyles } from "./AppbarStyles"
import { AppBar } from "@material-ui/core"

const AppbarNotLoggedIn = () => {
  const classes = AppbarNotLoggedInStyles()
  const dispatch = useAppDispatch()

  // Opens Login Dialog
  const openLoginDialog = () => dispatch(toggleLoginDialog())

  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.loginButton} onClick={openLoginDialog}>
          LOGIN
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppbarNotLoggedIn
