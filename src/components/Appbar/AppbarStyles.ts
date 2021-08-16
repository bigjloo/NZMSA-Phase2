import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

export const AppbarContainerStyles = makeStyles(() =>
  createStyles({
    appBar: {
      position: "fixed",
      top: "auto",
      bottom: 0,
      // backgroundColor: theme.palette.primary.dark,'
    },
    
    
}))

export const AppbarLoggedInStyles = makeStyles((theme: Theme) => 
  createStyles({
    appBar: {
      position: "fixed",
      top: "auto",
      bottom: 0,
      // backgroundColor: theme.palette.primary.dark,'
    },

    fabButton: {
      position: "absolute",
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
      backgroundColor: theme.palette.secondary.light,
    },

    toolbar: {
      justifyContent: "space-between",
    },

    iconButton: {
      // color: theme.palette.secondary.contrastText,
      padding: "0 2rem",
    },
}))

export const AppbarNotLoggedInStyles = makeStyles((theme: Theme) => 
  createStyles({
    appBar: {
      position: "fixed",
      top: "auto",
      bottom: 0,
      // backgroundColor: theme.palette.primary.dark,'
    },
    loginButton: {
      color: theme.palette.primary.main,
      margin: "auto",
      fontSize: "1rem",
    },
}))