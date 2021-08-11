// import { useEffect } from "react"
// import { useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"
import { GithubLoginProcessor } from "./api/api"
import SharedContentContainer from "./pages/SharedContent/SharedContentContainer"
import Onboard from "./pages/Onboard"
import Layout from "./components/Layout/Layout"
import User from "./components/User/User"

import { useQuery } from "@apollo/client"
import { VERIFY_USER } from "./apollo-client/query"
import { login } from "./store/authReducer"

function App() {
  const isAuth = useAppSelector<boolean>((store) => store.auth.isAuth)

  // Auto login user if token exist and verified
  const { loading, error } = useQuery(VERIFY_USER, {
    skip: !!localStorage.getItem("HYD_JWT"),
  })

  const dispatch = useAppDispatch()

  if (!loading && !error) {
    dispatch(login())
  }

  // Verify user if token exist in localStorage
  // useEffect(() => {
  //   const verify = async () => {
  //     await verifyUser()
  //     if (error) return
  //     dispatch(login())
  //   }
  //   !!localStorage.getItem("HYD_JWT") && verify()
  // }, [verifyUser, error, dispatch])

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
