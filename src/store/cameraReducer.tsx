import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ICameraState {
  isCameraOpen: boolean
  cardImage: Blob | undefined
}

const initialCameraState: ICameraState = {
  isCameraOpen: false,
  cardImage: undefined,
}

const cameraSlice = createSlice({
  name: "Camera",
  initialState: initialCameraState,
  reducers: {
    setCardImage(state, action: PayloadAction<Blob | undefined>) {
      state.cardImage = action.payload
    },

    setIsCameraOpen(state, action: PayloadAction<boolean>) {
      state.isCameraOpen = action.payload
    },
  },
})

export const { setCardImage, setIsCameraOpen } = cameraSlice.actions

export default cameraSlice.reducer
