import { useState } from "react"
import EventTimeline from "../Event/EventTimeline"
import { Camera } from "../MediaCapture/Camera"

const UserCanvas = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [cardImage, setCardImage] = useState()
  // TOOD
  // styling
  return (
    <>
      <h1>Canvas</h1>;
      <EventTimeline />
      {isCameraOpen && (
        <Camera
          onCapture={(blob: any) => setCardImage(blob)}
          onClear={() => setCardImage(undefined)}
        />
      )}
      {cardImage && (
        <div>
          <h2>Preview</h2>
          <img
            alt="preview"
            src={cardImage && URL.createObjectURL(cardImage)}
          />
        </div>
      )}
      <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
    </>
  )
}

export default UserCanvas
