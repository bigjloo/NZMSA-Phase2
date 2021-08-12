import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "@material-ui/core/Button"
// import { decorators } from "../../../.storybook/preview"

export default {
  title: "UI Button",
  component: Button,
  argTypes: {
    color: { options: ["primary", "secondary", "inherit"] },
    variant: { options: ["outlined", "contained", "text"] },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Text</Button>
)

export const Primary = Template.bind({})

Primary.args = {
  color: "primary",
  variant: "outlined",
  value: "Primary",
  disabled: false,
  size: "small",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "text",
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
