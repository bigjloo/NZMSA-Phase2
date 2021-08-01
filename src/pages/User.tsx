import Button from "@material-ui/core/Button";

import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { logout } from "../store/authReducer";
import EventDialog from "../components/Event/EventDialog";
import ShareDialog from "../components/Share/ShareDialog";
import Canvas from "../components/UI/Canvas";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS_DAYS_EVENTS } from "../apollo-client/query";

const User = () => {
  const { loading, data, error } = useQuery(GET_ALL_USERS_DAYS_EVENTS);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error...</h1>;

  if (data) console.log(data);

  return (
    <>
      <h1>App page</h1>
      <Button onClick={logoutHandler}>Log Out</Button>
      <Canvas />
      {data.users.map((user: any) => (
        <p>{user.name}</p>
      ))}
      <EventDialog />
      <ShareDialog />
    </>
  );
};

export default User;
