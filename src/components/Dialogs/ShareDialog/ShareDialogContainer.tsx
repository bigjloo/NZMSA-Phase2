import { CONFIGURATION } from "../../../apollo-client/apollo"

import { useAppSelector, useAppDispatch } from "../../../store/storeHooks"
import { toggleShareDialog } from "../../../store/dialogReducer"
import { openNotification } from "../../../store/notificationReducer"

import ShareDialog from "./ShareDialog"

const ShareDialogContainer = () => {
  const dispatch = useAppDispatch()

  const isShareDialogOpen = useAppSelector<boolean>(
    (state) => state.dialog.isShareDialogOpen
  )
  const publishKey = useAppSelector<string>((state) => state.events.publishKey)

  // Public URL to access User shared events
  const publishURL = `${CONFIGURATION.FRONTEND}share/${publishKey}`

  // Opens Share Dialog
  const toggleHandler = () => dispatch(toggleShareDialog())

  // Copies publish URL to clipboard
  const onCopyToClipboard = () => {
    navigator.clipboard.writeText(publishURL)
    dispatch(
      openNotification({
        message: "Copied to clipboard!",
        alertType: "info",
      })
    )
  }

  return (
    <ShareDialog
      publishURL={publishURL}
      isShareDialogOpen={isShareDialogOpen}
      onCopyToClipboard={onCopyToClipboard}
      toggleHandler={toggleHandler}
    />
  )
}

export default ShareDialogContainer
