import { Meta, Story } from "@storybook/react"
import BackdropContainer from "./BackdropContainer"
import { BackdropContainerProps } from "./BackdropContainer"

export default {
  title: "Backdrop",
  component: BackdropContainer,
} as Meta

const Template: Story<BackdropContainerProps> = (args) => (
  <BackdropContainer {...args} />
)

export const LoadingBackdrop = Template.bind({})
LoadingBackdrop.args = {
  loading: true,
}
