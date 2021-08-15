import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import HeaderStyles from "./HeaderStyles"

type HeaderProps = {
  avatarURI: string
  githubName: string
  logoutHandler: () => void
}

const Header = ({ avatarURI, githubName, logoutHandler }: HeaderProps) => {
  const classes = HeaderStyles()
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
