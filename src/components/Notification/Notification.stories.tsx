import { Meta, Story } from "@storybook/react"
import Notification, { NotificationProps } from "./Notification"

export default {
  title: "Components/Notification",
} as Meta

const Template: Story<NotificationProps> = (args) => <Notification {...args} />

export const AddEvent = Template.bind({})
AddEvent.args = {
  anchorOrigin: { vertical: "top", horizontal: "center" },
  isNotificationOpen: true,
  message: "Event Successfully Added!",
  alertType: "success",
}

export const CopyToClipboard = Template.bind({})
CopyToClipboard.args = {
  anchorOrigin: { vertical: "top", horizontal: "center" },
  isNotificationOpen: true,
  message: "Copied to clipboard!",
  alertType: "info",
}

export const Error = Template.bind({})
Error.args = {
  anchorOrigin: { vertical: "top", horizontal: "center" },
  isNotificationOpen: true,
  message: "Error",
  alertType: "error",
}
