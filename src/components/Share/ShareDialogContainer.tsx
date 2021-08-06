import { useAppSelector, useAppDispatch } from "../../store/storeHooks"

import { toggleShareDialog } from "../../store/dialogReducer"
import ShareDialog from "./ShareDialog"
import { CONFIGURATION } from "../../apollo-client/apollo"

const ShareDialogContainer = () => {
  const [openShareDialog, publishKey] = useAppSelector((state) => [
    state.dialog.isShareDialogOpen,
    state.events.publishKey,
  ])

  const publishURL = `${CONFIGURATION.LOCAL_FRONTEND}share/${publishKey}`

  const dispatch = useAppDispatch()

  const toggleHandler = () => dispatch(toggleShareDialog())

  const onCopyToClipboard = () => {
    navigator.clipboard.writeText(publishURL)
    // TODO
    // show some alert that text have been copied
    // toggleCopyAlert()
  }
  console.log("inside sharedialogcontainer")
  console.log(publishKey)

  return (
    <ShareDialog
      publishURL={publishURL}
      openShareDialog={openShareDialog}
      onCopyToClipboard={onCopyToClipboard}
      toggleHandler={toggleHandler}
    />
  )
}

export default ShareDialogContainer
