import { ReactNode } from "react"
// import { useAppSelector } from "../../store/storeHooks"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigation: {
      width: "100%",
      position: "fixed",
      left: 0,
      bottom: 0,
      borderRadius: "10px 10px 0 0",
      backgroundColor: theme.palette.primary.main,
    },
  })
)

const NavigationContainer = ({ children }: { children: ReactNode }) => {
  const classes = useStyles()
  return (
    <BottomNavigation className={classes.navigation} showLabels>
      {children}
    </BottomNavigation>
  )
}

export default NavigationContainer
