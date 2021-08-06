import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"

export type LoginDialogContentProps = {
  githubAuthURL: string
  openLoginDialog: boolean
  login: () => void
  signup: () => void
  toggleHandler: () => void
}

const LoginDialog = ({
  githubAuthURL,
  openLoginDialog,
  signup,
  login,
  toggleHandler,
}: LoginDialogContentProps) => {
  return (
    <Dialog open={openLoginDialog} onClose={toggleHandler}>
      <DialogContent>
        <a href={githubAuthURL}>GITHUB LOGIN</a>
        <br />
        <TextField label="login" type="text" fullWidth />
        <TextField label="password" type="password" fullWidth />
        <DialogActions>
          <Button onClick={signup}>Signup</Button>
          <Button onClick={login}>Login</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
