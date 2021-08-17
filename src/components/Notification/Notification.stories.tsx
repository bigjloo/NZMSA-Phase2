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
}

export const CopyToClipboard = Template.bind({})
CopyToClipboard.args = {
  anchorOrigin: { vertical: "top", horizontal: "center" },
  isNotificationOpen: true,
  message: "Copied to clipboard!",
}

export const SaveEvents = Template.bind({})
SaveEvents.args = {
  anchorOrigin: { vertical: "top", horizontal: "center" },
  isNotificationOpen: true,
  message: "Events Saved!",
}

export const Logout = Template.bind({})
Logout.args = {
  anchorOrigin: { vertical: "top", horizontal: "center" },
  isNotificationOpen: true,
  message: "Logged Out",
}
