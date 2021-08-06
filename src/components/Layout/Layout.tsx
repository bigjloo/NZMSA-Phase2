import { ReactNode } from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { styled } from "@material-ui/core/styles"
import NavigationContainer from "../Navigation/NavigationContainer"

type LayoutProps = {
  children: ReactNode
}

const StyledContainer = styled(Container)({
  height: "100vh",
  maxWidth: "xs",
})

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledContainer>
      <Box component="main">{children}</Box>
      <NavigationContainer />
    </StyledContainer>
  )
}

export default Layout
