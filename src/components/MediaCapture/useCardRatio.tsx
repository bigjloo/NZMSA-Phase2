import { useCallback } from "react"
import { setAspectRatio } from "../../store/cameraReducer"
import { useAppDispatch } from "../../store/storeHooks"

// Credits to: https://blog.logrocket.com/responsive-camera-component-react-hooks/
export function useCardRatio(initialRatio: number) {
  const dispatch = useAppDispatch()

  const calculateRatio = useCallback(
    (height: number, width: number) => {
      if (height && width) {
        const isLandscape = height <= width
        const ratio = isLandscape ? width / height : height / width

        dispatch(setAspectRatio(ratio))
      }
    },
    [dispatch]
  )

  // useEffect(() => {
  //   dispatch(setAspectRatio(initialRatio))
  // }, [initialRatio, dispatch])

  return [calculateRatio]
}
