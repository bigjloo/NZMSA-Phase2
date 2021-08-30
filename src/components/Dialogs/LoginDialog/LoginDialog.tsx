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
  const loginLabel = "Login"
  const passwordLabel = "Password"
  return (
    <>
      <TextField label={loginLabel} type="text" color="secondary" fullWidth />
      <TextField
        label={passwordLabel}
        type="password"
        color="secondary"
        fullWidth
      />
    </>
  )
}

const LoginDialogActions = (props: LoginDialogActionsProps) => {
  const classes = LoginDialogStyles()
  const { signUpClickHandler, loginClickHandler } = props

  const signUpButtonText = "Sign Up"
  const loginButtonText = "Login"

  return (
    <DialogActions>
      <Button onClick={signUpClickHandler}>{signUpButtonText}</Button>
      <Button className={classes.loginButton} onClick={loginClickHandler}>
        {loginButtonText}
      </Button>
    </DialogActions>
  )
}

export default LoginDialog
