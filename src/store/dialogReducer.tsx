import { createSlice } from "@reduxjs/toolkit";
import { IDialogState } from "../common/types_interfaces";

const initialDialogState: IDialogState = {
  isEventDialogOpen: false,
  isShareDialogOpen: false,
  isLoginDialogOpen: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState: initialDialogState,
  reducers: {
    toggleEventDialog(state) {
      state.isEventDialogOpen = !state.isEventDialogOpen;
    },
    toggleShareDialog(state) {
      state.isShareDialogOpen = !state.isShareDialogOpen;
    },
    toggleLoginDialog(state) {
      state.isLoginDialogOpen = !state.isLoginDialogOpen;
    },
  },
});

export const { toggleEventDialog, toggleShareDialog, toggleLoginDialog } =
  dialogSlice.actions;

export default dialogSlice.reducer;
