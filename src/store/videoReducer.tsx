import { createSlice } from "@reduxjs/toolkit"

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
    setContainer(state, action) {
      state.container.height = action.payload.height
      state.container.width = action.payload.width
    },
    setIsVideoPlaying(state) {
      state.isVideoPlaying = !state.isVideoPlaying
    },
    setIsCanvasEmpty(state) {
      state.isCanvasEmpty = !state.isCanvasEmpty
    },
    setIsFlashing(state) {
      state.isFlashing = !state.isFlashing
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
