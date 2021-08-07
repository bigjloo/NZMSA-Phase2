// import { useEffect } from "react"
// import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
// import { setMediaStream } from "../../store/cameraReducer"

// // Credits to: https://blog.logrocket.com/responsive-camera-component-react-hooks/
// export interface IRequestedMedia {
//   audio: boolean
//   video: {
//     facingMode: string
//   }
// }

// export function useUserMedia(requestedMedia: IRequestedMedia) {
//   const mediaStream = useAppSelector((state) => state.camera.mediaStream)
//   const dispatch = useAppDispatch()

//   useEffect(() => {
//     async function enableStream() {
//       try {
//         // gets permission from User to use media from requestedMedia(constraints)
//         // returns a mediaStream object or error
//         const stream = await navigator.mediaDevices.getUserMedia(requestedMedia)
//         dispatch(setMediaStream(stream))
//       } catch (err) {
//         // Removed for brevity
//       }
//     }

//     if (!mediaStream) {
//       enableStream()
//     } else {
//       // cleanup function when component unmounts
//       return function cleanup() {
//         mediaStream.getTracks().forEach((track) => {
//           track.stop()
//         })
//       }
//     }
//   }, [mediaStream, requestedMedia, dispatch])

//   return mediaStream
// }

export {}
