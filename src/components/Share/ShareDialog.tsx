import { useState, useEffect } from "react"
import Dialog from "@material-ui/core/Dialog"
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks"
import { toggleShareDialog } from "../../store/dialogReducer"
import ShareDialogContent from "./ShareDialogContent"

const ShareDialog = () => {
  const [publishKey, setPublishKey] = useState("")

  const generatePublishKey = () => {
    return [...Array(8)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("")
  }

  useEffect(() => {
    const key = generatePublishKey()
    setPublishKey(key)
  }, [])

  const dispatch = useAppDispatch()
  const openShareDialog = useAppSelector<boolean>(
    (state) => state.dialog.isShareDialogOpen
  )

  const toggleHandler = () => {
    dispatch(toggleShareDialog())
  }

  return (
    <Dialog open={openShareDialog} onClose={toggleHandler}>
      <ShareDialogContent publishKey={publishKey} />
    </Dialog>
  )
}

export default ShareDialog
