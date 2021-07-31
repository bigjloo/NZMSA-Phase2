import { useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useAppSelector } from "./hooks/storeHooks";

import User from "./pages/User";
import Onboard from "./pages/Onboard";
import Layout from "./components/UI/Layout";

import { GET_ALL_USERS_DAYS_EVENTS } from "./apollo-client/query";

function App() {
  // const { loading, error, data } = useQuery(GET_ALL_USERS_DAYS_EVENTS);

  // if (loading) return <h1>Loading...</h1>;

  // if (error) return <h1>Error {error.message}</h1>;

  // if (data) {
  //   console.log(data);
  // }
  const isAuth = useAppSelector((store) => store.auth.isAuth);
  // useLayoutEffect(() => {}, [isAuth]);
  console.log(isAuth);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {isAuth ? <User /> : <Onboard />}
          {console.log(isAuth)}
        </Route>
        <Route path="/:publishKey"></Route>
      </Switch>
    </Layout>
  );
}

export default App;

// Routes
//
// / - Onboard page - Not signed in
// /:user - User page - loads unfinished timeline for the day
// /:publishkey Visitor page -
//    onboarding process for visitors to join
