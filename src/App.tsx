import { useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import { useAppSelector } from "./hooks/storeHooks"

import Layout from "./components/UI/Layout"
import User from "./pages/User"
import Onboard from "./pages/Onboard"
import GithubLoginProcessor from "./components/GithubLoginProcessor"
import PublishedContent from "./pages/PublishedContent"

function App() {
  const isAuth = useAppSelector((store) => store.auth.isAuth)

  useEffect(() => {
    //check and validate user to set isAuth
    const token = localStorage.getItem("HYD_JWT")
    if (token) {
      // check with backend 
      // set isAuth to true 
    }
  }, [])

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {isAuth ? <User /> : <Onboard />}
        </Route>
        <Route path="/signin/callback/">
          <GithubLoginProcessor />
        </Route>
        <Route path="/share/:publishKey">
          <PublishedContent />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
