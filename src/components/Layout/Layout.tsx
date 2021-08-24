import { ReactNode } from "react"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

import Notification from "../Notification/NotificationContainer"
import Header from "../Header/HeaderContainer"
import AppbarLoggedIn from "../Appbar/LoggedIn/AppbarLoggedIn"
import AppbarNotLoggedIn from "../Appbar/NotLoggedIn/AppbarNotLoggedIn"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import LayoutStyles from "./LayoutStyles"

type LayoutProps = {
  children: ReactNode
  isAuth: boolean
  isDark: boolean
}

const Layout = ({ children, isAuth, isDark }: LayoutProps) => {
  const classes = LayoutStyles()

  return (
    <Container className={classes.container}>
      <Notification />
      {isAuth && <Header />}
      <ThemeToggle isDark={isDark} />
      <Box component="main">{children}</Box>
      {isAuth ? <AppbarLoggedIn /> : <AppbarNotLoggedIn />}
    </Container>
  )
}

export default Layout
