import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import { useAppDispatch } from "../../store/storeHooks"
import { toggleLoginDialog } from "../../store/dialogReducer"
// type NotLoggedInNavigationProps = {
//   openLoginDialog: () => void
// }

const NotLoggedInNavigation = () => {
  const dispatch = useAppDispatch()

  const openLoginDialog = () => dispatch(toggleLoginDialog())
  console.log("inside NotLoggedInContainer.tsx")

  return (
    <BottomNavigationAction
      label="Login/Sign Up"
      showLabel
      onClick={openLoginDialog}
    />
  )
}

export default NotLoggedInNavigation
