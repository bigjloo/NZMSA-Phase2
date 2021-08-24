import { Meta, Story } from "@storybook/react"
import AppbarNotLoggedIn from "./NotLoggedIn/AppbarNotLoggedIn"
import AppbarLoggedIn from "./LoggedIn/AppbarLoggedIn"

export default {
  title: "Components/AppBar",
  component: AppbarLoggedIn,
} as Meta

export const LoggedInAppbar: Story = () => <AppbarLoggedIn />
LoggedInAppbar.storyName = "Logged In"

export const LoggedOutAppbar: Story = () => <AppbarNotLoggedIn />
LoggedOutAppbar.storyName = "Logged Out"
