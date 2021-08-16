import { Meta, Story } from "@storybook/react"
import ThemeToggle, { ThemeToggleProps } from "./ThemeToggle"

export default {
  title: "Theme Toggle",
  component: ThemeToggle,
} as Meta

const Template: Story<ThemeToggleProps> = (args) => <ThemeToggle {...args} />

export const ThemeToggleLight = Template.bind({})
ThemeToggleLight.args = {
  isDark: false,
}

export const ThemeToggleDark = Template.bind({})
ThemeToggleDark.args = {
  isDark: true,
}
