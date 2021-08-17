// import Typography from "@material-ui/core/Typography"
// import Grid from "@material-ui/core/Grid"
// // import Box from "@material-ui/core/Box"
// import Button from "@material-ui/core/Button"
// import Avatar from "@material-ui/core/Avatar"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { logout } from "../../store/authReducer"
import { openNotification } from "../../store/notificationReducer"
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Header from "./Header"
import HeaderStyles from "./HeaderStyles"

const HeaderContainer = () => {
  const classes = HeaderStyles()
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
    <Header
      avatarURI={avatarURI!}
      githubName={githubName!}
      logoutHandler={logoutHandler}
      classes={classes}
    />
  )
}

export default HeaderContainer
