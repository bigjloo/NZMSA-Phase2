import React from "react"
import { Route, Switch } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { useAppSelector } from "./hooks/storeHooks"

import User from "./pages/User"
import Onboard from "./pages/Onboard"
import WithGH from "./pages/WithGH"
import PublishedContent from "./pages/PublishedContent"
import Layout from "./components/UI/Layout"

import { GET_ALL_USERS_DAYS_EVENTS } from "./apollo-client/query"

function App() {
  // const { loading, error, data } = useQuery(GET_ALL_USERS_DAYS_EVENTS);
  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>Error {error.message}</h1>;
  // if (data) {
  //   console.log(data);
  // }

  const isAuth = useAppSelector((store) => store.auth.isAuth)

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {isAuth ? <User /> : <Onboard />}
        </Route>
        {/* Example: /signin/callback/?code=asd123 */}
        <Route path="/signin/callback/">
          <WithGH />
        </Route>
        <Route path="/share/:publishKey">
          <PublishedContent />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App

// Routes
//
// / - Onboard page - Not signed in
// /:user - User page - loads unfinished timeline for the day
// /:publishkey Visitor page -
//    onboarding process for visitors to join

// gh login
// user click github login
// user approve request
// github redirects back to site
// at the redirect route, create a mutation query to backend with code
// backend makes an oauth token request with the code + client ID + client secret
// backend sends back JWT token

// user can use JWT token to verify his identity
