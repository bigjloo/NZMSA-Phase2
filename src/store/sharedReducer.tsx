import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialSharedState = {
  publisher: "",
  date: "",
}

const sharedSlice = createSlice({
  name: "Shared Content",
  initialState: initialSharedState,
  reducers: {
    setSharedContentDetails(
      state,
      action: PayloadAction<{ publisher: string; date: string }>
    ) {
      state.publisher = action.payload.publisher
      state.date = action.payload.date
    },
  },
})

export const { setSharedContentDetails } = sharedSlice.actions

export default sharedSlice.reducer
