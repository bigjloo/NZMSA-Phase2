import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"
import GitHubIcon from "@material-ui/icons/GitHub"
import LoginDialogStyles from "./LoginDialogStyles"

export type LoginDialogProps = {
  isLoginDialogOpen: boolean
  toggleLoginDialogHandler: () => void
  gitHubClickHandler: () => void
  signUpClickHandler: () => void
  loginClickHandler: () => void
}

type GithubLoginButtonProps = Pick<LoginDialogProps, "gitHubClickHandler">

type SignUpButtonProps = Pick<LoginDialogProps, "signUpClickHandler">

type LoginButtonProps = Pick<LoginDialogProps, "loginClickHandler">

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
        <LoginFormFields />
        <DialogActions>
          <SignUpButton signUpClickHandler={signUpClickHandler} />
          <LoginButton loginClickHandler={loginClickHandler} />
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

const GithubLoginButton = ({ gitHubClickHandler }: GithubLoginButtonProps) => {
  return (
    <Button
      children="Github Login"
      variant="text"
      startIcon={<GitHubIcon />}
      onClick={gitHubClickHandler}
    />
  )
}

const LoginFormFields = () => {
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

const SignUpButton = ({ signUpClickHandler }: SignUpButtonProps) => {
  return <Button children="Sign Up" onClick={signUpClickHandler} />
}

const LoginButton = ({ loginClickHandler }: LoginButtonProps) => {
  const classes = LoginDialogStyles()
  return (
    <Button
      className={classes.loginButton}
      children="Login"
      onClick={loginClickHandler}
    />
  )
}

export default LoginDialog
