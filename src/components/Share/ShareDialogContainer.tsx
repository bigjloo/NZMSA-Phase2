import { useAppSelector, useAppDispatch } from "../../store/storeHooks"

import { toggleShareDialog } from "../../store/dialogReducer"
import ShareDialog from "./ShareDialog"
import { CONFIGURATION } from "../../apollo-client/apollo"
import { openNotification } from "../../store/notificationReducer"

const ShareDialogContainer = () => {
  const isShareDialogOpen = useAppSelector<boolean>(
    (state) => state.dialog.isShareDialogOpen
  )
  const publishKey = useAppSelector<string>((state) => state.events.publishKey)

  // Public URL to access User shared events
  const publishURL = `${CONFIGURATION.FRONTEND}share/${publishKey}`

  const dispatch = useAppDispatch()

  // Opens Share Dialog
  const toggleHandler = () => dispatch(toggleShareDialog())

  // Copies publish URL to clipboard
  const onCopyToClipboard = () => {
    navigator.clipboard.writeText(publishURL)
    dispatch(openNotification("Copied to clipboard!"))
  }

  return (
    <ShareDialog
      publishURL={publishURL}
      openShareDialog={isShareDialogOpen}
      onCopyToClipboard={onCopyToClipboard}
      toggleHandler={toggleHandler}
    />
  )
}

export default ShareDialogContainer
