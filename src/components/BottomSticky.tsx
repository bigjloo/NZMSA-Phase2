import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { styled } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ShareIcon from "@material-ui/icons/Share";

import { BottomStickyProps } from "../common/types_interfaces";

const StickyBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  left: 0,
  bottom: 0,
  borderRadius: "20px 20px 0 0",
  backgroundColor: "#EEEEEE",
});

const BottomSticky = (props: BottomStickyProps) => {
  return (
    <StickyBottomNavigation showLabels>
      <BottomNavigationAction
        label="Add"
        icon={<AddCircleOutlineIcon onClick={props.openEventDialog} />}
      />
      <BottomNavigationAction
        label="Share"
        icon={<ShareIcon />}
        onClick={props.openShareDialog}
      />
    </StickyBottomNavigation>
  );
};

export default BottomSticky;
