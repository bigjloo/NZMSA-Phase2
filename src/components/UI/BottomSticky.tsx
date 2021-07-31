import { useAppSelector } from "../../hooks/storeHooks";

import { styled } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import LoggedInNavigation from "./LoggedInNavigation";
import NotLoggedInNavigation from "./NotLoggedInNavigation";

const StickyBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  left: 0,
  bottom: 0,
  borderRadius: "20px 20px 0 0",
  backgroundColor: "#EEEEEE",
});

const BottomSticky = () => {
  const isAuth = useAppSelector((store) => store.auth.isAuth);

  return (
    <StickyBottomNavigation showLabels>
      {isAuth ? <LoggedInNavigation /> : <NotLoggedInNavigation />}
    </StickyBottomNavigation>
  );
};

export default BottomSticky;
