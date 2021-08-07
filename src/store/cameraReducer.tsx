import { createSlice } from "@reduxjs/toolkit"

interface IInitialCameraState {
  cardImage: Blob | undefined
}

const initialCameraState: IInitialCameraState = {
  cardImage: undefined,
}

const cameraSlice = createSlice({
  name: "camera",
  initialState: initialCameraState,
  reducers: {
    setCardImage(state, action) {
      state.cardImage = action.payload
    },
  },
})

export const { setCardImage } = cameraSlice.actions

export default cameraSlice.reducer
