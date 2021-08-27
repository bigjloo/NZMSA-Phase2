import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IShareState {
  publisher: string
  date: string
}

const initialSharedState: IShareState = {
  publisher: "",
  date: "",
}

const sharedSlice = createSlice({
  name: "Shared Content",
  initialState: initialSharedState,
  reducers: {
    setSharedContentDetails(state, action: PayloadAction<IShareState>) {
      state.publisher = action.payload.publisher
      state.date = action.payload.date
    },
  },
})

export const { setSharedContentDetails } = sharedSlice.actions

export default sharedSlice.reducer
