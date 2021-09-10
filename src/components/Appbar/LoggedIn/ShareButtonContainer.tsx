import { useMemo } from "react"
import IconButton from "@material-ui/core/IconButton"

import { useAppDispatch } from "../../../store/storeHooks"
import { toggleShareDialog } from "../../../store/dialogReducer"
import { setPublishKey } from "../../../store/eventReducer"
import AppbarLoggedInStyles from "./AppbarLoggedInStyles"
import { generateKey } from "../../../utils/helpers/generator"

type AppButtonProps = {
  clickHandler: () => void
}

const ShareButtonContainer = () => {
  const dispatch = useAppDispatch()
  const key = useMemo(() => generateKey(8), [])

  const onOpenShareDialog = () => {
    dispatch(toggleShareDialog())
    dispatch(setPublishKey(key))
  }

  return <ShareButton clickHandler={onOpenShareDialog} />
}

const ShareButton = ({ clickHandler }: AppButtonProps) => {
  const classes = AppbarLoggedInStyles()
  return (
    <IconButton
      className={classes.iconButton}
      children="Publish"
      edge="end"
      onClick={clickHandler}
    />
  )
}

export default ShareButtonContainer
