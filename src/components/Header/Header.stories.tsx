import { Meta, Story } from "@storybook/react"
import Header, { HeaderProps } from "./Header"

export default {
  title: "Components/Header",
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const AppHeader = Template.bind({})
AppHeader.args = {
  avatarURI: "test",
  githubName: "Github Name",
}
