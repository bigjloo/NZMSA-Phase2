import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"
import GitHubIcon from "@material-ui/icons/GitHub"

import LoginDialogStyles from "./LoginDialogStyles"

export type LoginDialogProps = GithubLoginButtonProps &
  LoginDialogActionsProps & {
    isLoginDialogOpen: boolean
    toggleLoginDialogHandler: () => void
  }

type GithubLoginButtonProps = {
  gitHubClickHandler: () => void
}

type LoginDialogActionsProps = {
  signUpClickHandler: () => void
  loginClickHandler: () => void
}

const LoginDialog = ({
  isLoginDialogOpen,
  signUpClickHandler,
  loginClickHandler,
  toggleLoginDialogHandler,
  gitHubClickHandler,
}: LoginDialogProps) => {
  const classes = LoginDialogStyles()

  return (
    <Dialog open={isLoginDialogOpen} onClose={toggleLoginDialogHandler}>
      <DialogContent className={classes.dialogContent}>
        <GithubLoginButton gitHubClickHandler={gitHubClickHandler} />
        <LoginForm />
        <LoginDialogActions
          signUpClickHandler={signUpClickHandler}
          loginClickHandler={loginClickHandler}
        />
      </DialogContent>
    </Dialog>
  )
}

const GithubLoginButton = ({ gitHubClickHandler }: GithubLoginButtonProps) => {
  const githubButtonText = "Github Login"
  return (
    <Button
      variant="text"
      startIcon={<GitHubIcon />}
      onClick={gitHubClickHandler}
    >
      {githubButtonText}
    </Button>
  )
}

const LoginForm = () => {
  const firstTextFieldLabel = "Login"
  const secondTextFieldLabel = "Password"
  return (
    <>
      <TextField
        label={firstTextFieldLabel}
        type="text"
        color="secondary"
        fullWidth
      />
      <TextField
        label={secondTextFieldLabel}
        type="password"
        color="secondary"
        fullWidth
      />
    </>
  )
}

const LoginDialogActions = ({
  signUpClickHandler,
  loginClickHandler,
}: LoginDialogActionsProps) => {
  const classes = LoginDialogStyles()

  const firstButtonText = "Sign Up"
  const secondButtonText = "Login"

  return (
    <DialogActions>
      <Button onClick={signUpClickHandler}>{firstButtonText}</Button>
      <Button className={classes.loginButton} onClick={loginClickHandler}>
        {secondButtonText}
      </Button>
    </DialogActions>
  )
}

export default LoginDialog
