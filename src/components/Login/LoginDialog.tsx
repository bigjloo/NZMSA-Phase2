import Dialog from "@material-ui/core/Dialog";
import LoginDialogContent from "./LoginDialogContent";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { toggleLoginDialog } from "../../store/dialogReducer";
import { login } from "../../store/authReducer";

const LoginDialog = () => {
  const dispatch = useAppDispatch();
  const openLoginDialog = useAppSelector(
    (state) => state.dialog.isLoginDialogOpen
  );
  const toggleHandler = () => {
    dispatch(toggleLoginDialog());
  };

  const handleLogin = () => {
    dispatch(login());
  };

  const handleGitHubLogin = () => {};

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
