import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"
import GitHubIcon from "@material-ui/icons/GitHub"

import LoginDialogStyles from "./LoginDialogStyles"

export type LoginDialogProps = {
  isLoginDialogOpen: boolean
  loginClickHandler: () => void
  signUpClickHandler: () => void
  toggleLoginDialogHandler: () => void
  gitHubClickHandler: () => void
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
      <DialogContent style={{ maxWidth: "300px" }}>
        <Button
          variant="text"
          startIcon={<GitHubIcon />}
          onClick={gitHubClickHandler}
        >
          GITHUB LOGIN
        </Button>
        <TextField label="Login" type="text" color="secondary" fullWidth />
        <TextField
          label="Password"
          type="password"
          color="secondary"
          fullWidth
        />
        <DialogActions>
          <Button onClick={signUpClickHandler}>Sign Up</Button>
          <Button className={classes.loginButton} onClick={loginClickHandler}>
            Login
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
