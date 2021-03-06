import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IFormInput {
  name: string
  description: string
}

const initialFormInputState: IFormInput = { name: "", description: "" }

const formInputSlice = createSlice({
  name: "Form Input",
  initialState: initialFormInputState,
  reducers: {
    handleNameInputChange(state, action: PayloadAction<string>) {
      state.name = action.payload
    },
    handleDescriptionInputChange(state, action: PayloadAction<string>) {
      state.description = action.payload
    },
    resetInputFields(state) {
      state.description = ""
      state.name = ""
    },
  },
})

export const {
  handleNameInputChange,
  handleDescriptionInputChange,
  resetInputFields,
} = formInputSlice.actions

export default formInputSlice.reducer
