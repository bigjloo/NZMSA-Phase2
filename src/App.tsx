import { Route, Switch } from "react-router-dom"

import { useQuery } from "@apollo/client"
import { VERIFY_USER } from "./apollo-client/queries"
import GithubLoginProcessor from "./api/GithubLoginProcessor"

import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"

import { login } from "./store/authReducer"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"

import { darkTheme, lightTheme } from "./theme"

import SharedContentPage from "./pages/SharedContentPage/SharedContentPageContainer"
import OnboardPage from "./pages/OnboardPage/OnboardPage"
import { useMemo } from "react"
import Layout from "./components/Layout/Layout"
import UserPageContainer from "./pages/UserPage/UserPageContainer"

function App() {
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)
  const isDark = useAppSelector<boolean>((state) => state.theme.isDarkTheme)

  // Sets dark/light theme
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [])

  // Checks if token exist in localStorage
  // and verifies token with backend
  const { loading, error } = useQuery(VERIFY_USER, {
    skip: !!localStorage.getItem("HYD_JWT"),
  })

  // Login user after token is verified
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
