import { GITHUB_AUTHORIZE_URL } from "../../../api/GithubLoginProcessor"
import { useAppSelector, useAppDispatch } from "../../../store/storeHooks"
import { toggleLoginDialog } from "../../../store/dialogReducer"
import LoginDialog from "./LoginDialog"

const LoginDialogContainer = () => {
  const dispatch = useAppDispatch()
  const isLoginDialogOpen = useAppSelector<boolean>(
    (state) => state.dialog.isLoginDialogOpen
  )

  // Redirects user to GitHhub for OAuth
  const gitHubClickHandler = () => (window.location.href = GITHUB_AUTHORIZE_URL)

  // Opens login dialog
  const toggleLoginDialogHandler = () => dispatch(toggleLoginDialog())
  // TODO
  const loginClickHandler = () => alert("to be implemented")

  // TODO
  const signUpClickHandler = () => alert("to be implemented")

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
