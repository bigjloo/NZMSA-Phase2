import {useState} from 'react'
import { Camera } from "./Camera"
import { Root, Preview, Footer, GlobalStyle } from "./styles";
import Button from "@material-ui/core/Button"
import CameraAltIcon from '@material-ui/icons/CameraAlt';

// Credits to: https://blog.logrocket.com/responsive-camera-component-react-hooks/

const CameraContainer = () => {
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [cardImage, setCardImage] = useState();
    

    const handleCameraClick = () => {
        setIsCameraOpen(state => (!state))
    }

    // cardImage  = true after first shot that why it is rendered
    return (
      <>
          {cardImage && (
            <div>
              {/* <h2>Preview</h2> */}
              <Preview src={cardImage && URL.createObjectURL(cardImage)} />
            </div>
          )}

            {isCameraOpen && (
            <Camera
              onCapture={blob => setCardImage(blob)}
              onClear={() => setCardImage(undefined)}
              handleCameraClick={handleCameraClick}
            />
          )}
  
            {/* <button onClick={() => setIsCameraOpen(true)}>Open Camera</button> */}
            {<Button style={{width: "100%" }}variant="outlined" onClick={handleCameraClick}>
                {isCameraOpen ? 
                    "Done" : "Take photo" 
                }
            </Button>}
            {/* <button
              onClick={() => {
                setIsCameraOpen(false);
                setCardImage(undefined);
              }}
            >
              Close Camera
            </button> */}
      </>
    );
}

export default CameraContainer

/* 
1)Take photo
    - show preview
    - set isCameraOpen = false
    - set button - take another photo
        -when clicked, set isCameraOpen = true, hide preview
// Save photo from preview
// 

*/