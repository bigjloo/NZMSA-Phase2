import { useRef } from "react"
import Measure from "react-measure"
import { useUserMedia } from "./useUserMedia"
import { useCardRatio } from "./useCardRatio"
import { useOffsets } from "./useOffsets"
import {
  Video,
  Canvas,
  Wrapper,
  Container,
  Flash,
  Overlay,
  Button,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import {
  setContainer,
  setIsCanvasEmpty,
  setIsFlashing,
  setIsVideoPlaying,
} from "../../store/videoReducer"

// Credits to: https://blog.logrocket.com/responsive-camera-component-react-hooks/

// constraints. Passed on to useUserMedia
const CAPTURE_OPTIONS = {
  audio: false,
  // for front camera, use facingMode: "user"
  video: { facingMode: "environment" },
}

type CameraProps = {
  onCapture: (blob: Blob | null) => void
  onClear: () => void
}

export function Camera({ onCapture, onClear }: CameraProps) {
  const canvasRef = useRef<HTMLCanvasElement>()
  const videoRef = useRef<HTMLVideoElement>()

  const [container, isVideoPlaying, isCanvasEmpty, isFlashing, aspectRatio] =
    useAppSelector((state) => [
      state.video.container,
      state.video.isVideoPlaying,
      state.video.isCanvasEmpty,
      state.video.isFlashing,
      state.camera.aspectRatio,
    ])

  const dispatch = useAppDispatch()
  // const [container, setContainer] = useState({ width: 0, height: 0 })
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  // const [isCanvasEmpty, setIsCanvasEmpty] = useState(true)
  // const [isFlashing, setIsFlashing] = useState(false)

  const mediaStream = useUserMedia(CAPTURE_OPTIONS)
  const [calculateRatio] = useCardRatio(1.586)
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  )

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream
  }

  function handleResize(contentRect: any) {
    dispatch(
      setContainer({
        width: contentRect.bounds.width,
        height: Math.round(contentRect.bounds.width / aspectRatio),
      })
    )
    // setContainer({
    //   width: contentRect.bounds.width,
    //   height: Math.round(contentRect.bounds.width / aspectRatio),
    // })
  }

  function handleCanPlay() {
    videoRef.current &&
      calculateRatio(
        videoRef.current.videoHeight,
        videoRef.current.videoWidth
      ) &&
      videoRef.current.play()
    dispatch(setIsVideoPlaying())
  }

  function handleCapture() {
    const context = canvasRef.current && canvasRef.current.getContext("2d")

    context &&
      videoRef.current &&
      context.drawImage(
        videoRef.current,
        offsets.x,
        offsets.y,
        container.width,
        container.height,
        0,
        0,
        container.width,
        container.height
      )

    canvasRef.current &&
      canvasRef.current.toBlob((blob) => onCapture(blob), "image/jpeg", 1)
    dispatch(setIsCanvasEmpty())
    dispatch(setIsFlashing())
  }

  function handleClear() {
    const context = canvasRef.current && canvasRef.current.getContext("2d")
    context &&
      canvasRef.current &&
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    dispatch(setIsCanvasEmpty())
    onClear()
  }

  if (!mediaStream) {
    return null
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <Wrapper>
          <Container
            ref={measureRef}
            maxHeight={videoRef.current && videoRef.current.videoHeight}
            maxWidth={videoRef.current && videoRef.current.videoWidth}
            style={{
              height: `${container.height}px`,
            }}
          >
            <Video
              ref={videoRef}
              hidden={!isVideoPlaying}
              onCanPlay={handleCanPlay}
              autoPlay
              playsInline
              muted
              style={{
                top: `-${offsets.y}px`,
                left: `-${offsets.x}px`,
              }}
            />

            <Overlay hidden={!isVideoPlaying} />

            <Canvas
              ref={canvasRef}
              width={container.width}
              height={container.height}
            />

            <Flash
              flash={isFlashing}
              onAnimationEnd={dispatch(setIsFlashing())}
            />
          </Container>

          {isVideoPlaying && (
            <Button onClick={isCanvasEmpty ? handleCapture : handleClear}>
              {isCanvasEmpty ? "Take a picture" : "Take another picture"}
            </Button>
          )}
        </Wrapper>
      )}
    </Measure>
  )
}
