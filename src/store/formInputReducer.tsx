import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "../common/types_interfaces";

const initialFormInputState: IEvent = { name: "", description: "" };

const formInputSlice = createSlice({
  name: "form input",
  initialState: initialFormInputState,
  reducers: {
    handleNameInputChange(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    handleDescriptionInputChange(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
  },
});

export const { handleNameInputChange, handleDescriptionInputChange } =
  formInputSlice.actions;

export default formInputSlice.reducer;
