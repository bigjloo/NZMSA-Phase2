import { Camera } from "./Camera"
import { Preview } from "./styles"
import Button from "@material-ui/core/Button"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { setCardImage, setIsCameraOpen } from "../../store/cameraReducer"
import { makeStyles, createStyles } from "@material-ui/core/styles"

// Credits to: https://blog.logrocket.com/responsive-camera-component-react-hooks/

const useStyles = makeStyles((theme) =>
  createStyles({
    cameraButton: {
      color: theme.palette.primary.contrastText,
      width: "100%",
      marginTop: "0.75rem",
    },
  })
)

const CameraContainer = () => {
  const classes = useStyles()
  const cardImage = useAppSelector((state) => state.camera.cardImage)
  const isCameraOpen = useAppSelector((state) => state.camera.isCameraOpen)

  const dispatch = useAppDispatch()

  const handleButtonClick = () => {
    // maybe bug
    dispatch(setIsCameraOpen(true))
    dispatch(setCardImage(undefined))
    // setIsCameraOpen(true)
  }

  const onCapture = (blob) => {
    dispatch(setIsCameraOpen(false))
    dispatch(setCardImage(blob))
  }
  const onClear = () => {
    dispatch(setIsCameraOpen(false))
    dispatch(setCardImage(undefined))
  }

  const buttonText = () => {
    if (isCameraOpen) {
      return "Done"
    } else if (cardImage) {
      return "Take Another Photo"
    } else {
      return "Take Photo"
    }
  }

  return (
    <>
      {cardImage && (
        <div>
          <Preview src={cardImage && URL.createObjectURL(cardImage)} />
        </div>
      )}
      {isCameraOpen && <Camera onCapture={onCapture} onClear={onClear} />}
      {!isCameraOpen && (
        <Button
          className={classes.cameraButton}
          variant="outlined"
          onClick={handleButtonClick}
        >
          {buttonText()}
        </Button>
      )}
    </>
  )
}

export default CameraContainer
