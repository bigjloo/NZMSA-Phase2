import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

type NotLoggedInNavigationProps = {
  openLoginDialog: () => void
}

const NotLoggedInNavigation = ({
  openLoginDialog,
}: NotLoggedInNavigationProps) => {
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
