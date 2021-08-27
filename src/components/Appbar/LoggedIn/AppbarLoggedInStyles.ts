import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

const AppbarLoggedInStyles = makeStyles((theme: Theme) => 
  createStyles({
    appBar: {
      top: "auto",
      bottom: "0px",
    },

    fabButton: {
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
      padding: "0 2rem",
    },
}))

export default AppbarLoggedInStyles