import { useAppDispatch } from "../../hooks/storeHooks";
import {
  toggleEventDialog,
  toggleShareDialog,
} from "../../store/dialogReducer";

import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ShareIcon from "@material-ui/icons/Share";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

const LoggedInNavigation = () => {
  const dispatch = useAppDispatch();

  const openEventDialog = () => dispatch(toggleEventDialog());

  const openShareDialog = () => dispatch(toggleShareDialog());

  const saveDay = () => {
    // Save day
  };
  return (
    <>
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
    </>
  );
};

export default LoggedInNavigation;
