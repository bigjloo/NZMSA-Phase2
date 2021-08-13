import { Route, Switch } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"
import { GithubLoginProcessor } from "./api/api"
import SharedContentContainer from "./pages/SharedContentPage/SharedContentContainer"
import Onboard from "./pages/OnboardPage/Onboard"
import Layout from "./components/Layout/Layout"
import User from "./pages/UserPage/User"

import { useQuery } from "@apollo/client"
import { VERIFY_USER } from "./apollo-client/queries"
import { login } from "./store/authReducer"

function App() {
  const isAuth = useAppSelector<boolean>((store) => store.auth.isAuth)

  // Verify user if token exists in local storage and login
  const { loading, error } = useQuery(VERIFY_USER, {
    skip: !!localStorage.getItem("HYD_JWT"),
  })

  const dispatch = useAppDispatch()

  if (!loading && !error) {
    dispatch(login())
  }

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          {isAuth ? <User /> : <Onboard />}
        </Route>
        <Route path="/signin/callback/">
          <GithubLoginProcessor />
        </Route>
        <Route path="/share/:publishKey">
          <SharedContentContainer />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
