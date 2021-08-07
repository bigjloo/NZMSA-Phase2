import {useState} from 'react'
import { Camera } from "./Camera"
import {Preview} from "./styles";
import Button from "@material-ui/core/Button"
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import {setCardImage} from '../../store/cameraReducer'

// Credits to: https://blog.logrocket.com/responsive-camera-component-react-hooks/

const CameraContainer = () => {
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    // const [cardImage, setCardImage] = useState();
    const cardImage = useAppSelector(state => state.camera.cardImage)

    const dispatch = useAppDispatch()

    const handleCameraClick = () => {
        setIsCameraOpen(state => (!state))
    }

    const onCapture = (blob) => dispatch(setCardImage(blob))
    const onClear = () => dispatch(setCardImage(undefined))

    console.log(cardImage)
    // cardImage  = true after first shot that why it is rendered
    return (
      <>
          {cardImage && (
            <div>
              <Preview src={cardImage && URL.createObjectURL(cardImage)} />
            </div>
          )}

            {isCameraOpen && (
            <Camera
              onCapture={onCapture}
              onClear={onClear}
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