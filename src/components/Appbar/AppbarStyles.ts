import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

const AppbarStyles = makeStyles((theme: Theme) =>
  createStyles({
      appBarContainer: {
        appBar: {
            // width: "100%",
            // position: "fixed",
            // left: 0,
            // bottom: 0,
            // borderRadius: "10px 10px 0 0",
            top: "auto",
            bottom: 0,
            backgroundColor: theme.palette.primary.dark,
          },
      },

      appbarLoggedIn: {
        navigationAction: {
            color: theme.palette.background.default,
          },
      
          navigationAddEvent: {
            position: "absolute",
            top: "-200",
            margin: "0 auto",
          },
      
          fabButton: {
            position: "absolute",
            top: -30,
            left: 0,
            right: 0,
            margin: "0 auto",
            backgroundColor: theme.palette.secondary.main,
          },
      
          toolbar: {
            flex: "row",
            justifyContent: "space-between",
          },
      
          iconButton: {
            color: theme.palette.background.default,
            fontSize: "1rem",
            padding: "0 2rem",
          },
      },
      
      appbarNotLoggedIn: {
        loginButton: {
            color: theme.palette.background.default,
            margin: "auto",
            fontSize: "1rem",
          },
      }
  })
)

export default AppbarStyles