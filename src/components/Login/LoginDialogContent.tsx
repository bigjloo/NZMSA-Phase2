import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

import { LoginDialogContentProps } from "../../common/types_interfaces";

const LoginDialogContent = (props: LoginDialogContentProps) => {
  const { githubLogin, signup, login } = props;

  return (
    <DialogContent>
      <Button onClick={githubLogin}>
        <a href="https://github.com/login/oauth/authorize?client_id=b77f552e93db0e271256">
          Github LOGIN
        </a>
      </Button>
      <br />
      <TextField label="login" type="text" fullWidth />
      <TextField label="password" type="password" fullWidth />
      <DialogActions>
        <Button onClick={signup}>Signup</Button>
        <Button onClick={login}>Login</Button>
      </DialogActions>
    </DialogContent>
  );
};

export default LoginDialogContent;
