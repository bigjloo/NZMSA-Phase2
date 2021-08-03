import { useEffect } from "react"

import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"

import { CONFIGURATION } from "../../apollo-client/apollo"

type ShareDialogContentProps = {
  publishKey: string
}

const ShareDialogContent = ({ publishKey }: ShareDialogContentProps) => {
  useEffect(() => {})

  return (
    <>
      <DialogTitle>Share</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {CONFIGURATION.SITE_URL}/share/{publishKey}
        </DialogContentText>
        <DialogActions>
          <Button>Share</Button>
        </DialogActions>
      </DialogContent>
    </>
  )
}

export default ShareDialogContent
