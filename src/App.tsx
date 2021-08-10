import { Route, Switch } from "react-router-dom"
import { useAppSelector } from "./store/storeHooks"
import { GithubLoginProcessor } from "./api/api"
import SharedContent from "./pages/SharedContent"
import Onboard from "./pages/Onboard"
import Layout from "./components/Layout/Layout"
import User from "./components/User/User"

function App() {
  const isAuth = useAppSelector<boolean>((store) => store.auth.isAuth)

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
          <SharedContent />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
