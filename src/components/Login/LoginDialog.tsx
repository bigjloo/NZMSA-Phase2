import Dialog from "@material-ui/core/Dialog"
import LoginDialogContent from "./LoginDialogContent"
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks"
import { toggleLoginDialog } from "../../store/dialogReducer"
import { login } from "../../store/authReducer"
import { CONFIGURATION } from "../../apollo-client/apollo"

const LoginDialog = () => {
  const dispatch = useAppDispatch()
  const openLoginDialog = useAppSelector(
    (state) => state.dialog.isLoginDialogOpen
  )
  const toggleHandler = () => dispatch(toggleLoginDialog())

  const handleLogin = () => dispatch(login())

  const handleSignUp = () => {}

  return (
    <Dialog open={openLoginDialog} onClose={toggleHandler}>
      <LoginDialogContent
        githubAuthURL={CONFIGURATION.GITHUB_AUTHORIZE_URL}
        login={handleLogin}
        signup={handleSignUp}
      />
    </Dialog>
  )
}

export default LoginDialog
