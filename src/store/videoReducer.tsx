import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialVideoState = {
  container: { width: 0, height: 0 },
  isVideoPlaying: false,
  isCanvasEmpty: true,
  isFlashing: false,
}

const videoSlice = createSlice({
  name: "video",
  initialState: initialVideoState,
  reducers: {
    setContainer(
      state,
      action: PayloadAction<{ width: number; height: number }>
    ) {
      state.container.height = action.payload.height
      state.container.width = action.payload.width
    },
    setIsVideoPlaying(state, action: PayloadAction<boolean>) {
      state.isVideoPlaying = action.payload
    },
    setIsCanvasEmpty(state, action: PayloadAction<boolean>) {
      state.isCanvasEmpty = action.payload
    },
    setIsFlashing(state, action: PayloadAction<boolean>) {
      state.isFlashing = action.payload
    },
  },
})

export const {
  setContainer,
  setIsVideoPlaying,
  setIsCanvasEmpty,
  setIsFlashing,
} = videoSlice.actions

export default videoSlice.reducer
