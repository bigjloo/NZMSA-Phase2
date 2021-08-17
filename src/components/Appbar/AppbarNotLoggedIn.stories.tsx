import { Meta, Story } from "@storybook/react"
import AppbarNotLoggedIn from "./AppbarNotLoggedIn"

export default {
  title: "Components/AppBar",
  component: AppbarNotLoggedIn,
} as Meta

export const LoggedOutAppbar: Story = () => <AppbarNotLoggedIn />
LoggedOutAppbar.storyName = "Logged Out"
