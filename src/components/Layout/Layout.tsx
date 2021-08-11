import { ReactNode } from "react"
import { useAppSelector } from "../../store/storeHooks"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { styled } from "@material-ui/core/styles"
import NavigationContainer from "../Navigation/NavigationContainer"
import Notification from "../UI/Notification"
import Header from "./Header"
import LoggedInNavigation from "../Navigation/LoggedInNavigation"
import NotLoggedInNavigation from "../Navigation/NotLoggedInNavigation"

type LayoutProps = {
  children: ReactNode
}

const StyledContainer = styled(Container)({
  height: "100vh",
  maxWidth: "xs",
})

const Layout = ({ children }: LayoutProps) => {
  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)

  return (
    <StyledContainer>
      <Notification />
      {isAuth && <Header />}
      <Box component="main">{children}</Box>
      <NavigationContainer>
        {isAuth ? <LoggedInNavigation /> : <NotLoggedInNavigation />}
      </NavigationContainer>
    </StyledContainer>
  )
}

export default Layout
