import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ICameraState {
  cardImage: Blob | undefined
}

const initialCameraState: ICameraState = {
  cardImage: undefined,
}

const cameraSlice = createSlice({
  name: "Camera",
  initialState: initialCameraState,
  reducers: {
    setCardImage(state, action: PayloadAction<Blob | undefined>) {
      state.cardImage = action.payload
    },
  },
})

export const { setCardImage } = cameraSlice.actions

export default cameraSlice.reducer
