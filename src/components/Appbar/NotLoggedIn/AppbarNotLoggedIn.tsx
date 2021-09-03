//import { Toolbar, AppBar, IconButton } from "@material-ui/core"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"

import { useAppDispatch } from "../../../store/storeHooks"
import { toggleLoginDialog } from "../../../store/dialogReducer"
import AppbarNotLoggedInStyles from "./AppbarNotLoggedInStyles"

type AppButtonProps = {
  clickHandler: () => void
}

const AppbarNotLoggedIn = () => {
  const dispatch = useAppDispatch()
  const classes = AppbarNotLoggedInStyles()
  const openLoginDialog = () => dispatch(toggleLoginDialog())

  return (
    <AppBar color="inherit" className={classes.mainAppbar}>
      <Toolbar>
        <LoginButton clickHandler={openLoginDialog} />
      </Toolbar>
    </AppBar>
  )
}

const LoginButton = ({ clickHandler }: AppButtonProps) => {
  const classes = AppbarNotLoggedInStyles()
  return (
    <IconButton
      className={classes.loginButton}
      children="LOGIN"
      onClick={clickHandler}
    />
  )
}

export default AppbarNotLoggedIn
