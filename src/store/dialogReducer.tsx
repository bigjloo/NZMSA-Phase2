import { createSlice } from "@reduxjs/toolkit";
import { DialogState } from "../common/types_interfaces";

const initialDialogState: DialogState = { isOpen: false };

const dialogSlice = createSlice({
  name: "dialog",
  initialState: initialDialogState,
  reducers: {
    // Actions
    toggleDialog(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

// exports dialogSlice.reducers
export const { toggleDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
