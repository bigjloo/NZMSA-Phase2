import { useAppSelector } from "../hooks/storeHooks";
import { toggleShareDialog } from "../store/dialogReducer";

import ShareDialogContent from "./ShareDialogContent";

import Dialog from "@material-ui/core/Dialog";

const ShareDialog = () => {
  const openShareDialog = useAppSelector(
    (state) => state.dialog.isShareDialogOpen
  );

  return (
    <Dialog open={true} onClose={toggleShareDialog}>
      <ShareDialogContent />
      asdasdasd
    </Dialog>
  );
};

export default ShareDialog;
