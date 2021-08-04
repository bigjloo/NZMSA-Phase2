import { ReactNode } from "react"
import Container from "@material-ui/core/Container"
import { styled } from "@material-ui/core/styles"
import BottomStickyNavigation from "./BottomSticky"

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
      <main>{children}</main>
      <BottomStickyNavigation />
    </StyledContainer>
  )
}

export default Layout
