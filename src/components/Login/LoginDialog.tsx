import Dialog from "@material-ui/core/Dialog";
import LoginDialogContent from "./LoginDialogContent";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { toggleLoginDialog } from "../../store/dialogReducer";
import { login } from "../../store/authReducer";
import { githubLogin } from "../../hooks/api";

const LoginDialog = () => {
  const dispatch = useAppDispatch();
  const openLoginDialog = useAppSelector(
    (state) => state.dialog.isLoginDialogOpen
  );
  const toggleHandler = () => dispatch(toggleLoginDialog());

  const handleLogin = () => dispatch(login());

  const handleGitHubLogin = () => {
    // Send http request to github with client ID
    // fetch(
    //   "https://github.com/login/oauth/authorize?client_id=b77f552e93db0e271256"
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  };

  const handleSignUp = () => {};

  return (
    <Dialog open={openLoginDialog} onClose={toggleHandler}>
      <LoginDialogContent
        githubLogin={handleGitHubLogin}
        login={handleLogin}
        signup={handleSignUp}
      />
    </Dialog>
  );
};

export default LoginDialog;
