import { useMemo } from "react"
import { Route, Switch } from "react-router-dom"
import { useQuery } from "@apollo/client"

import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import { darkTheme, lightTheme } from "./theme"

import { login } from "./store/authReducer"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"

import { VERIFY_USER } from "./apollo-client/queries"
import GithubLoginProcessor from "./api/GithubLoginProcessor"
import Layout from "./components/Layout/Layout"
import SharedContentPage from "./pages/SharedContentPage/SharedContentPageContainer"
import OnboardPage from "./pages/OnboardPage/OnboardPage"
import UserPageContainer from "./pages/UserPage/UserPageContainer"

function App() {
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)
  const isDark = useAppSelector<boolean>((state) => state.theme.isDarkTheme)

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark])

  // Verifies token with backend if
  // token exists in local storage
  const { loading, error } = useQuery(VERIFY_USER, {
    skip: !!localStorage.getItem("HYD_JWT"),
  })

  // Login user if token is verified
  if (!loading && !error) {
    dispatch(login())
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout isAuth={isAuth} isDark={isDark}>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            {isAuth ? <UserPageContainer /> : <OnboardPage />}
          </Route>
          <Route path="/signin/callback/" component={GithubLoginProcessor} />
          <Route path="/share/:publishKey" component={SharedContentPage} />
        </Switch>
      </Layout>
    </ThemeProvider>
  )
}

export default App
