import { useMemo } from "react"
import { Route, Switch } from "react-router-dom"

import { useQuery } from "@apollo/client"
import { VERIFY_USER } from "./apollo-client/queries"
import { GithubLoginProcessor } from "./api/GithubLoginProcessor"

import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"

import { login } from "./store/authReducer"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"
import SharedContentPage from "./pages/SharedContentPage/SharedContentPage"
import OnboardPage from "./pages/OnboardPage/OnboardPage"
import Layout from "./components/Layout/Layout"
import UserPage from "./pages/UserPage/UserPage"
import { darkTheme, lightTheme } from "./theme"

function App() {
  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)
  const isDark = useAppSelector<boolean>((state) => state.theme.isDarkTheme)

  const dispatch = useAppDispatch()

  // Sets dark/light theme
  const theme = useMemo(() => {
    return isDark ? darkTheme : lightTheme
  }, [isDark])

  // Checks if token exist in localStorage and
  // verifies token with backend and login if user exists
  const { loading, error } = useQuery(VERIFY_USER, {
    skip: !!localStorage.getItem("HYD_JWT"),
  })

  // Login user
  if (!loading && !error) {
    dispatch(login())
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout isAuth={isAuth} isDark={isDark}>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            {isAuth ? <UserPage /> : <OnboardPage />}
          </Route>
          <Route path="/signin/callback/">
            <GithubLoginProcessor />
          </Route>
          <Route path="/share/:publishKey">
            <SharedContentPage />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  )
}

export default App
