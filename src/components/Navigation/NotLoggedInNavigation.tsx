import IconButton from "@material-ui/core/IconButton"
import { useAppDispatch } from "../../store/storeHooks"
import { toggleLoginDialog } from "../../store/dialogReducer"
import { Toolbar } from "@material-ui/core"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
// import { useTheme } from "@material-ui/core/styles"
// type NotLoggedInNavigationProps = {
//   openLoginDialog: () => void
// }

const NotLoggedInNavigationStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginButton: {
      color: theme.palette.background.default,
      margin: "auto",
      fontSize: "1rem",
    },
  })
)

const NotLoggedInNavigation = () => {
  const classes = NotLoggedInNavigationStyles()
  const dispatch = useAppDispatch()

  // Opens Login Dialog
  const openLoginDialog = () => dispatch(toggleLoginDialog())

  return (
    <Toolbar>
      <IconButton className={classes.loginButton} onClick={openLoginDialog}>
        LOGIN
      </IconButton>
    </Toolbar>
  )
}

export default NotLoggedInNavigation
