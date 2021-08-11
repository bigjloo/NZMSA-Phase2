import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import { useAppDispatch } from "../../store/storeHooks"
import { toggleLoginDialog } from "../../store/dialogReducer"
import { useTheme } from "@material-ui/core/styles"
// type NotLoggedInNavigationProps = {
//   openLoginDialog: () => void
// }

const NotLoggedInNavigation = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()

  // Opens Login Dialog
  const openLoginDialog = () => dispatch(toggleLoginDialog())

  return (
    <BottomNavigationAction
      label="Login/Sign Up"
      showLabel
      onClick={openLoginDialog}
      style={{ color: theme.palette.background.default }}
    />
  )
}

export default NotLoggedInNavigation
