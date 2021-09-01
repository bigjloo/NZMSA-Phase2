import { Meta, Story } from "@storybook/react"
import Notification, { NotificationProps } from "./Notification"

export default {
  title: "Components/Notification",
} as Meta

const Template: Story<NotificationProps> = (args) => <Notification {...args} />

export const Success = Template.bind({})
Success.args = {
  anchorOrigin: { vertical: "top", horizontal: "center" },
  isNotificationOpen: true,
  message: "Event Successfully Added!",
  alertType: "success",
}

export const Info = Template.bind({})
Info.args = {
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
