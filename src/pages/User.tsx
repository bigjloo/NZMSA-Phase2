import Button from "@material-ui/core/Button";

import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { logout } from "../store/authReducer";
import EventDialog from "../components/Event/EventDialog";
import ShareDialog from "../components/Share/ShareDialog";
import Canvas from "../components/UI/Canvas";

const User = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <h1>App page</h1>
      <Button onClick={logoutHandler}>Log Out</Button>
      <Canvas />
      <EventDialog />
      <ShareDialog />
    </>
  );
};

export default User;
