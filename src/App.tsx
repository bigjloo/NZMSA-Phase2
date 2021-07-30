import { Route, Switch } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useAppSelector } from "./hooks/storeHooks";

import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";

import BottomSticky from "./components/UI/BottomSticky";
import User from "./pages/User";
import Onboard from "./pages/Onboard";

import { GET_ALL_USERS_DAYS_EVENTS } from "./apollo-client/query";

const ContainerWithBorders = styled(Container)({
  border: "1px solid red",
  height: "100vh",
  maxWidth: "xs",
});

function App() {
  // const { loading, error, data } = useQuery(GET_ALL_USERS_DAYS_EVENTS);

  // if (loading) return <h1>Loading...</h1>;

  // if (error) return <h1>Error {error.message}</h1>;

  // if (data) {
  //   console.log(data);
  // }
  const isAuth = useAppSelector((store) => store.auth.isAuth);
  return (
    <ContainerWithBorders maxWidth="xs">
      <Switch>
        <Route path="/">
          {isAuth ? <User /> : <Onboard />}
          <BottomSticky />
        </Route>
      </Switch>
    </ContainerWithBorders>
  );
}

export default App;

// Routes
//
// / - Onboard page - Not signed in
// /:user - User page - loads unfinished timeline for the day
// /:publishkey Visitor page -
//    onboarding process for visitors to join
