import { createSlice } from "@reduxjs/toolkit";
import { IDialogState } from "../common/types_interfaces";

const initialDialogState: IDialogState = { isOpen: false };

const dialogSlice = createSlice({
  name: "dialog",
  initialState: initialDialogState,
  reducers: {
    toggleDialog(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
