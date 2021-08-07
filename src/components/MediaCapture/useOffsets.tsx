import { useEffect } from "react"
import { setOffsets } from "../../store/cameraReducer"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"

// Credits to: https://blog.logrocket.com/responsive-camera-component-react-hooks/

/**
 * In the event that the video (v) is larger than it's parent container (c), calculate offsets
 * to center the container in the middle of the video.
 **/
export function useOffsets(
  vWidth: number | undefined,
  vHeight: number | undefined,
  cWidth: number | undefined,
  cHeight: number | undefined
) {
  const offsets = useAppSelector((state) => state.camera.offsets)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (vWidth && vHeight && cWidth && cHeight) {
      const x = vWidth > cWidth ? Math.round((vWidth - cWidth) / 2) : 0
      const y = vHeight > cHeight ? Math.round((vHeight - cHeight) / 2) : 0

      dispatch(setOffsets({ x, y }))
    }
  }, [vWidth, vHeight, cWidth, cHeight, dispatch])

  return offsets
}
