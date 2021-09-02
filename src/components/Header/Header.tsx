import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import HeaderStyles from "./HeaderStyles"

export type HeaderProps = {
  avatarURI: string
  githubName: string
  logoutHandler: () => void
}

type LogoutButtonProps = Pick<HeaderProps, "logoutHandler">

type UserDetailsProps = Pick<HeaderProps, "githubName" | "avatarURI">

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
        <UserDetails avatarURI={avatarURI} githubName={githubName} />
      </Grid>
      <Grid item xs={4}>
        <LogoutButton logoutHandler={logoutHandler} />
      </Grid>
    </Grid>
  )
}

const LogoutButton = ({ logoutHandler }: LogoutButtonProps) => {
  const classes = HeaderStyles()
  return (
    <Button
      children="Logout"
      className={classes.logoutButton}
      onClick={logoutHandler}
      variant="outlined"
    />
  )
}

const UserDetails = ({ avatarURI, githubName }: UserDetailsProps) => {
  const classes = HeaderStyles()
  return (
    <>
      <Grid item xs={2}>
        <Avatar className={classes.large} alt="user avatar" src={avatarURI} />
      </Grid>
      <Grid className={classes.githubName} item xs={2}>
        <Typography>{githubName}</Typography>
      </Grid>
    </>
  )
}

export default Header
