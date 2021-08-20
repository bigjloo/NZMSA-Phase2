import { Meta, Story } from "@storybook/react"
import ThemeToggle, { ThemeToggleProps } from "./ThemeToggle"

export default {
  title: "Components/Dark Mode Toggler",
  component: ThemeToggle,
} as Meta

const Template: Story<ThemeToggleProps> = (args) => <ThemeToggle {...args} />

export const ThemeToggleDark = Template.bind({})
ThemeToggleDark.storyName = "On"
ThemeToggleDark.args = {
  isDark: true,
}

export const ThemeToggleLight = Template.bind({})
ThemeToggleLight.storyName = "Off"
ThemeToggleLight.args = {
  isDark: false,
}
