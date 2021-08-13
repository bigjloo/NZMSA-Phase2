import { ReactNode } from "react"
import { useAppSelector } from "../../store/storeHooks"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import NavigationContainer from "../Appbar/AppbarContainer"
import Notification from "../UI/Notification"
import Header from "./Header"
import LoggedInNavigation from "../Appbar/Appbar__LoggedIn"
import NotLoggedInNavigation from "../Appbar/Appbar__NotLoggedIn"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
      height: "100vh",
      maxWidth: "xs",
      padding: "0",
    },
  })
)

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles()
  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)

  return (
    <Container className={classes.root}>
      <Notification />
      {isAuth && <Header />}
      <Box component="main">{children}</Box>
      <NavigationContainer>
        {isAuth ? <LoggedInNavigation /> : <NotLoggedInNavigation />}
      </NavigationContainer>
    </Container>
  )
}

export default Layout
