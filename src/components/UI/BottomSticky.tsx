import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import {
  toggleEventDialog,
  toggleShareDialog,
  toggleLoginDialog,
} from "../../store/dialogReducer";

import { styled } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ShareIcon from "@material-ui/icons/Share";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

const StickyBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  left: 0,
  bottom: 0,
  borderRadius: "20px 20px 0 0",
  backgroundColor: "#EEEEEE",
});

const BottomSticky = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((store) => store.auth.isAuth);

  const openEventDialog = () => {
    dispatch(toggleEventDialog());
  };

  const openShareDialog = () => {
    dispatch(toggleShareDialog());
  };

  const openLoginDialog = () => {
    dispatch(toggleLoginDialog());
  };

  const saveDay = () => {
    // Save day
  };

  return (
    <StickyBottomNavigation showLabels>
      {isAuth ? (
        
          <BottomNavigationAction
            label="Add"
            icon={<AddCircleOutlineIcon onClick={openEventDialog} />}
          />
          <BottomNavigationAction
            label="Save"
            icon={<SaveAltIcon />}
            onClick={saveDay}
          />
          <BottomNavigationAction
            label="Share"
            icon={<ShareIcon />}
            onClick={openShareDialog}
          />
        
      ) : (
        <BottomNavigationAction
          label="Login/Sign Up"
          onClick={openLoginDialog}
        />
      )}
    </StickyBottomNavigation>
  );
};

export default BottomSticky;
