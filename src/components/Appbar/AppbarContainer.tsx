import { ReactNode } from "react"
// import { useAppSelector } from "../../store/storeHooks"

// import { makeStyles, createStyles } from "@material-ui/core/styles"
// import BottomNavigation from "@material-ui/core/BottomNavigation"
import { AppBar } from "@material-ui/core"
import { AppbarContainerStyles } from "./AppbarStyles"
// import AppbarStyles from "./AppbarStyles"

// const useStyles = makeStyles(() =>
//   createStyles({
//     appBar: {
//       // width: "100%",
//       // position: "fixed",
//       // left: 0,
//       // bottom: 0,
//       // borderRadius: "10px 10px 0 0",
//       top: "auto",
//       bottom: 0,
//       // backgroundColor: theme.palette.primary.dark,
//     },
//   })
// )

export type AppContainerProps = {
  children: ReactNode
}

const AppbarContainer = ({ children }: AppContainerProps) => {
  const classes = AppbarContainerStyles()

  return (
    <AppBar color="inherit" className={classes.appBar}>
      {children}
    </AppBar>
  )
}

export default AppbarContainer
