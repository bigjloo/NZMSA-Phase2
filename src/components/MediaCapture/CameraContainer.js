import {useState} from 'react'
import { Camera } from "./Camera"
import { Root, Preview, Footer, GlobalStyle } from "./styles";

// Credits to: https://blog.logrocket.com/responsive-camera-component-react-hooks/

const CameraContainer = () => {
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [cardImage, setCardImage] = useState();
  
    return (
      <>
          {isCameraOpen && (
            <Camera
              onCapture={blob => setCardImage(blob)}
              onClear={() => setCardImage(undefined)}
            />
          )}
  
          {cardImage && (
            <div>
              <h2>Preview</h2>
              <Preview src={cardImage && URL.createObjectURL(cardImage)} />
            </div>
          )}
  
            <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
            <button
              onClick={() => {
                setIsCameraOpen(false);
                setCardImage(undefined);
              }}
            >
              Close Camera
            </button>
      </>
    );
}

export default CameraContainer

// Take photo
// Save photo from preview
// 