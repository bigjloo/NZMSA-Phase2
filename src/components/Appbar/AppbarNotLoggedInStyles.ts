import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"


const AppbarNotLoggedInStyles = makeStyles((theme: Theme) => 
  createStyles({
    mainAppbar: {
      top: "auto",
      bottom: "0px",
    },
    loginButton: {
      color: theme.palette.secondary.main,
      margin: "auto",
      fontSize: "1rem",
    },
}))

export default AppbarNotLoggedInStyles