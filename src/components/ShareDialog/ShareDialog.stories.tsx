import { Meta, Story } from "@storybook/react"
// import Dialog from "@material-ui/core/Dialog"
import ShareDialog, { ShareDialogProps } from "./ShareDialog"
// import EventDialog from "../EventDialog/EventDialog"
import LoginDialog, { LoginDialogProps } from "../LoginDialog/LoginDialog"

export default {
  title: "Dialogs",
  component: ShareDialog,
} as Meta

export const AppShareDialog: Story<ShareDialogProps> = (args) => (
  <ShareDialog {...args} />
)
AppShareDialog.args = {
  publishURL: "http://www.example.com/examp1e",
  openShareDialog: true,
  onCopyToClipboard: () => alert("copied to clipboard"),
}

// export const AppEventDialog: Story = () => <EventDialog />

export const AppLoginDialog: Story<LoginDialogProps> = (args) => (
  <LoginDialog {...args} />
)
AppLoginDialog.args = {
  isLoginDialogOpen: true,
}
