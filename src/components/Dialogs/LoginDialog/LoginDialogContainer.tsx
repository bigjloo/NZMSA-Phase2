import { CONFIGURATION } from "../../../apollo-client/apollo"

import { useAppSelector, useAppDispatch } from "../../../store/storeHooks"
import { toggleLoginDialog } from "../../../store/dialogReducer"
import { login } from "../../../store/authReducer"

import LoginDialog from "./LoginDialog"

const LoginDialogContainer = () => {
  const isLoginDialogOpen = useAppSelector<boolean>(
    (state) => state.dialog.isLoginDialogOpen
  )

  const dispatch = useAppDispatch()

  // Opens login dialog
  const toggleLoginDialogHandler = () => dispatch(toggleLoginDialog())

  // Login user
  const loginClickHandler = () => dispatch(login())

  // TODO
  const signUpClickHandler = () => {}

  // Redirects to GitHhub for OAuth
  const gitHubClickHandler = () =>
    (window.location.href = CONFIGURATION.GITHUB_AUTHORIZE_URL)

  return (
    <LoginDialog
      isLoginDialogOpen={isLoginDialogOpen}
      loginClickHandler={loginClickHandler}
      signUpClickHandler={signUpClickHandler}
      toggleLoginDialogHandler={toggleLoginDialogHandler}
      gitHubClickHandler={gitHubClickHandler}
    />
  )
}

export default LoginDialogContainer
