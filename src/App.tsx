import { useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"
import { GithubLoginProcessor } from "./api/api"
import SharedContentPage from "./pages/SharedContentPage/SharedContentPage"
import OnboardPage from "./pages/OnboardPage/OnboardPage"
import Layout from "./components/Layout/Layout"
import UserPage from "./pages/UserPage/UserPage"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import { darkTheme, lightTheme } from "./theme"

import { useQuery } from "@apollo/client"
import { VERIFY_USER } from "./apollo-client/queries"
import { login } from "./store/authReducer"

function App() {
  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)
  const isDark = useAppSelector<boolean>((state) => state.theme.isDarkTheme)

  const dispatch = useAppDispatch()

  const theme = isDark ? darkTheme : lightTheme

  // Verify user if token exists in local storage and login
  const { loading, error } = useQuery(VERIFY_USER, {
    skip: !!localStorage.getItem("HYD_JWT"),
  })

  if (!loading && !error) {
    dispatch(login())
  }

  // TODO CHeck user settings for dark mode
  useEffect(() => {})

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
