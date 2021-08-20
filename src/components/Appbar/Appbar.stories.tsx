import { Meta, Story } from "@storybook/react"
// import AppbarNotLoggedIn from "./AppbarNotLoggedIn"
import AppbarLoggedIn from "./AppbarLoggedIn"

export default {
  title: "Components/AppBar",
  component: AppbarLoggedIn,
} as Meta

export const LoggedInAppbar: Story = () => <AppbarLoggedIn />
LoggedInAppbar.storyName = "Logged In"

// export const LoggedOutAppbar: Story = () => <AppbarNotLoggedIn />
// LoggedOutAppbar.storyName = "Logged Out"
