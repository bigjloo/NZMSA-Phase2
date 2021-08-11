// import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// interface ICameraState {
//   isCameraOpen: boolean
//   cardImage: Blob | null | undefined
//   mediaStream: MediaStream | null
//   offsets: { x: number; y: number }
//   aspectRatio: number
// }

// const initialCameraState: ICameraState = {
//   isCameraOpen: false,
//   cardImage: undefined,
//   mediaStream: null,
//   offsets: { x: 0, y: 0 },
//   aspectRatio: 1.586,
// }

// const cameraSlice = createSlice({
//   name: "Camera",
//   initialState: initialCameraState,
//   reducers: {
//     setIsCameraOpen(state, action: PayloadAction<boolean>) {
//       state.isCameraOpen = action.payload
//     },
//     setCardImage(state, action: PayloadAction<Blob | undefined | null>) {
//       state.cardImage = action.payload
//     },
//     setMediaStream(state, action: PayloadAction<MediaStream>) {
//       state.mediaStream = action.payload
//     },
//     setOffsets(state, action: PayloadAction<{ x: number; y: number }>) {
//       state.offsets.x = action.payload.x
//       state.offsets.y = action.payload.y
//     },
//     setAspectRatio(state, action: PayloadAction<number>) {
//       state.aspectRatio = action.payload
//     },
//   },
// })

// export const {
//   setIsCameraOpen,
//   setCardImage,
//   setMediaStream,
//   setOffsets,
//   setAspectRatio,
// } = cameraSlice.actions

// export default cameraSlice.reducer
export {}
