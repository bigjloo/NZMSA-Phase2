// import { Camera } from "./Camera"
// import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
// import { setCardImage, setIsCameraOpen } from "../../store/cameraReducer"

// // Credits to: https://blog.logrocket.com/responsive-camera-component-react-hooks/

// const CameraContainer = () => {
//   const [isCameraOpen, cardImage] = useAppSelector((state) => [
//     state.camera.isCameraOpen,
//     state.camera.cardImage,
//   ])
//   const dispatch = useAppDispatch()

//   const onCapture = (blob: Blob | null) => dispatch(setCardImage(blob))
//   const onClear = () => dispatch(setCardImage(undefined))

//   const openCamera = () => dispatch(setIsCameraOpen(true))
//   const closeCamera = () => dispatch(setIsCameraOpen(false))

//   return (
//     <>
//       {isCameraOpen && <Camera onCapture={onCapture} onClear={onClear} />}
//       {cardImage && (
//         <div>
//           <h2>Preview</h2>
//           <img
//             alt="preview"
//             src={cardImage && URL.createObjectURL(cardImage)}
//           />
//         </div>
//       )}
//       <button onClick={openCamera}>Open Camera</button>
//       <button onClick={closeCamera}>Close Camera</button>
//     </>
//   )
// }

// export default CameraContainer
export {}
