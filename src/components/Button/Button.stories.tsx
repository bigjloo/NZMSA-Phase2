import { Meta, Story } from "@storybook/react"
import Button from "@material-ui/core/Button"
import { ReactNode } from "react"
// import { decorators } from "../../../.storybook/preview"

type ButtonProps = {
  variant: "outlined" | "contained" | "text"
  children: ReactNode
  color: "default" | "inherit" | "primary" | "secondary"
  className?: string
}

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: "playground",
}

Playground.argTypes = {
  variant: {
    control: {
      type: "select",
      options: ["outlined", "contained", "text"],
    },
  },
  color: {
    control: {
      type: "select",
      options: ["default", "inherit", "primary", "secondary"],
    },
  },
}

export const Outline = Template.bind({})
Outline.storyName = "Outlined"
Outline.args = {
  variant: "outlined",
  children: "logout",
}

export const AppbarButton = Template.bind({})
AppbarButton.storyName = "Appbar Buttons"
AppbarButton.args = {
  variant: "text",
  children: "share/save",
}
