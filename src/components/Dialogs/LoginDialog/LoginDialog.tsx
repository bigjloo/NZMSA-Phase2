import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"
import GitHubIcon from "@material-ui/icons/GitHub"
import LoginDialogStyles from "./LoginDialogStyles"

export type LoginDialogProps = {
  githubAuthURL: string
  isLoginDialogOpen: boolean
  login: () => void
  signup: () => void
  toggleLoginDialogHandler: () => void
}

const LoginDialog = ({
  githubAuthURL,
  isLoginDialogOpen,
  signup,
  login,
  toggleLoginDialogHandler,
}: LoginDialogProps) => {
  const classes = LoginDialogStyles()
  return (
    <Dialog open={isLoginDialogOpen} onClose={toggleLoginDialogHandler}>
      <DialogContent style={{ maxWidth: "300px" }}>
        <Button
          variant="text"
          startIcon={<GitHubIcon />}
          onClick={() => (window.location.href = githubAuthURL)}
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
          <Button onClick={signup}>Signup</Button>
          <Button className={classes.loginButton} onClick={login}>
            Login
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
