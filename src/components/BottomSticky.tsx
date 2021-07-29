import { useDispatch } from "react-redux";
import { toggleEventDialog, toggleShareDialog } from "../store/dialogReducer";

import { styled } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ShareIcon from "@material-ui/icons/Share";

const StickyBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  left: 0,
  bottom: 0,
  borderRadius: "20px 20px 0 0",
  backgroundColor: "#EEEEEE",
});

const BottomSticky = () => {
  const dispatch = useDispatch();

  const openEventDialog = () => {
    dispatch(toggleEventDialog());
  };

  const openShareDialog = () => {
    dispatch(toggleShareDialog());
  };

  return (
    <StickyBottomNavigation showLabels>
      <BottomNavigationAction
        label="Add"
        icon={<AddCircleOutlineIcon onClick={openEventDialog} />}
      />
      <BottomNavigationAction
        label="Share"
        icon={<ShareIcon />}
        onClick={openShareDialog}
      />
    </StickyBottomNavigation>
  );
};

export default BottomSticky;
