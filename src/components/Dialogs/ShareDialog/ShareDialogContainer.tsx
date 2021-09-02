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

  // URL to access user shared events
  const publishURL = `${CONFIGURATION.FRONTEND}share/${publishKey}`

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

  const toggleHandler = () => dispatch(toggleShareDialog())

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
