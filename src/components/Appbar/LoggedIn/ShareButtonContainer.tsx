import { useMemo } from "react"
import IconButton from "@material-ui/core/IconButton"

import { useAppDispatch } from "../../../store/storeHooks"
import { toggleShareDialog } from "../../../store/dialogReducer"
import { setPublishKey } from "../../../store/eventReducer"
import AppbarLoggedInStyles from "./AppbarLoggedInStyles"

type AppButtonProps = {
  clickHandler: () => void
}

const ShareButtonContainer = () => {
  const dispatch = useAppDispatch()
  const key = useMemo(() => generateKey(), [])

  const onOpenShareDialog = () => {
    dispatch(toggleShareDialog())
    dispatch(setPublishKey(key))
  }

  return <ShareButton clickHandler={onOpenShareDialog} />
}

const ShareButton = ({ clickHandler }: AppButtonProps) => {
  const classes = AppbarLoggedInStyles()
  const shareButtonText = "Publish"
  return (
    <IconButton
      className={classes.iconButton}
      edge="end"
      onClick={clickHandler}
    >
      {shareButtonText}
    </IconButton>
  )
}

// Generates 8 random alphanumeric char string
const generateKey = () =>
  [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join("")

export default ShareButtonContainer
