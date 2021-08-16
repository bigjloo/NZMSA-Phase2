import { useAppSelector, useAppDispatch } from "../../../store/storeHooks"

import { toggleLoginDialog } from "../../../store/dialogReducer"
import { login } from "../../../store/authReducer"
import LoginDialog from "./LoginDialog"
import { CONFIGURATION } from "../../../apollo-client/apollo"

const LoginDialogContainer = () => {
  const isLoginDialogOpen = useAppSelector<boolean>(
    (state) => state.dialog.isLoginDialogOpen
  )

  const dispatch = useAppDispatch()

  // Opens login dialog
  const toggleLoginDialogHandler = () => dispatch(toggleLoginDialog())

  // Login user
  const handleLogin = () => dispatch(login())

  // TODO
  const handleSignUp = () => {}

  return (
    <LoginDialog
      githubAuthURL={CONFIGURATION.GITHUB_AUTHORIZE_URL}
      isLoginDialogOpen={isLoginDialogOpen}
      login={handleLogin}
      signup={handleSignUp}
      toggleLoginDialogHandler={toggleLoginDialogHandler}
    />
  )
}

export default LoginDialogContainer
