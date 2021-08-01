import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { toggleShareDialog } from "../../store/dialogReducer";
import { useState } from "react";

import ShareDialogContent from "./ShareDialogContent";

import Dialog from "@material-ui/core/Dialog";

const ShareDialog = () => {
  const dispatch = useAppDispatch();
  const openShareDialog = useAppSelector(
    (state) => state.dialog.isShareDialogOpen
  );

  const toggleHandler = () => {
    dispatch(toggleShareDialog());
  };

  const generatePublishKey = () => {
    // TODO
    // When share dialog is open, generate publishkey
    const randomHex = () => {
      // Length == 8
      [...Array(8)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");
    };

    return randomHex;
  };

  return (
    <Dialog open={openShareDialog} onClose={toggleHandler}>
      <ShareDialogContent />
    </Dialog>
  );
};

export default ShareDialog;
