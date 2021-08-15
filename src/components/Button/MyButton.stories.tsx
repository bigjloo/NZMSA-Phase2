import { Meta, Story } from "@storybook/react"
import Button from "@material-ui/core/Button"
import { ReactNode } from "react"
// import { decorators } from "../../../.storybook/preview"

type ButtonProps = {
  variant: "outlined" | "contained" | "text"
  children: ReactNode
  className?: string
}

export default {
  title: "My Buttons",
  component: Button,
  argTypes: {},
  //   decorators: decorators,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const LogoutButton = Template.bind({})
LogoutButton.storyName = "Logout Button"
LogoutButton.args = {
  variant: "outlined",
  children: "logout",
}

export const ShareButton = Template.bind({})
ShareButton.args = {
  variant: "text",
  children: "share",
}

export const PublishButton = Template.bind({})
PublishButton.args = {
  variant: "text",
  children: "publish",
}
