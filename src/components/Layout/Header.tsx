import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
// import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { logout } from "../../store/authReducer"
import { openNotification } from "../../store/notificationReducer"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },

    header: {
      padding: "1rem 2rem",
      borderBottom: "1px solid green",
      boxShadow: "0 0.2rem 1.5rem",
      color: "inherit",
    },

    githubName: {
      paddingLeft: "1.5rem",
    },

    logoutButton: {
      float: "right",
      // color: theme.palette.secondary.contrastText,
    },
  })
)

const Header = () => {
  const classes = useStyles()

  const avatarURI = useAppSelector<string | undefined>(
    (state) => state.user.githubImageURI
  )
  const githubName = useAppSelector<string | undefined>(
    (state) => state.user.githubName
  )

  const dispatch = useAppDispatch()

  // Logouts user and removes JWT Token from local storage
  const logoutHandler = () => {
    dispatch(logout())
    localStorage.removeItem("HYD_JWT")
    dispatch(openNotification("Logged out"))
  }

  return (
    <Grid
      className={classes.header}
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid
        container
        alignItems="center"
        item
        direction="row"
        justifyContent="flex-start"
        xs={8}
      >
        <Grid item xs={2}>
          <Avatar className={classes.large} alt="user avatar" src={avatarURI} />
        </Grid>
        <Grid className={classes.githubName} item xs={2}>
          <Typography>{githubName}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Button
          className={classes.logoutButton}
          onClick={logoutHandler}
          variant="outlined"
        >
          Logout
        </Button>
      </Grid>
    </Grid>
  )
}

export default Header
