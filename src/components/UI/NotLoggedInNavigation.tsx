import { useAppDispatch } from "../../hooks/storeHooks"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import { toggleLoginDialog } from "../../store/dialogReducer"

const NotLoggedInNavigation = () => {
  const dispatch = useAppDispatch()

  const openLoginDialog = () => dispatch(toggleLoginDialog())

  return (
    <BottomNavigationAction
      label="Login/Sign Up"
      showLabel
      onClick={openLoginDialog}
    />
  )
}

export default NotLoggedInNavigation
