import { ReactNode } from "react"
// import { useAppSelector } from "../../store/storeHooks"

import { styled } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"

const StyledBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  left: 0,
  bottom: 0,
  borderRadius: "10px 10px 0 0",
  backgroundColor: "#EEEEEE",
})

const NavigationContainer = ({ children }: { children: ReactNode }) => {
  return <StyledBottomNavigation showLabels>{children}</StyledBottomNavigation>
}

export default NavigationContainer
