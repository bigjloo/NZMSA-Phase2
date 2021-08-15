import { ReactNode } from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
// import AppbarContainer from "../Appbar/AppbarContainer"
import NotificationContainer from "../Notification/NotificationContainer"
import HeaderContainer from "../Header/HeaderContainer"
import AppbarLoggedIn from "../Appbar/AppbarLoggedIn"
import AppbarNotLoggedIn from "../Appbar/AppbarNotLoggedIn"
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
      <NotificationContainer />
      {isAuth && <HeaderContainer />}
      <ThemeToggle isDark={isDark} />
      <Box component="main">{children}</Box>
      {isAuth ? <AppbarLoggedIn /> : <AppbarNotLoggedIn />}
    </Container>
  )
}

export default Layout
