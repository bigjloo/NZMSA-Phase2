import { GITHUB_AUTHORIZE_URL } from "../../../api/GithubLoginProcessor"

import { useAppSelector, useAppDispatch } from "../../../store/storeHooks"
import { toggleLoginDialog } from "../../../store/dialogReducer"

import LoginDialog from "./LoginDialog"

const LoginDialogContainer = () => {
  const dispatch = useAppDispatch()

  const isLoginDialogOpen = useAppSelector<boolean>(
    (state) => state.dialog.isLoginDialogOpen
  )

  // Opens login dialog
  const toggleLoginDialogHandler = () => dispatch(toggleLoginDialog())

  // placeholder
  const loginClickHandler = () => alert("to be implemented")

  // placeholder
  const signUpClickHandler = () => alert("to be implemented")

  // Redirects to GitHhub for OAuth
  const gitHubClickHandler = () => (window.location.href = GITHUB_AUTHORIZE_URL)

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
