import { Meta, Story } from "@storybook/react"
import BackdropContainer from "./BackdropContainer"
import { BackdropContainerProps } from "./BackdropContainer"

export default {
  title: "Components/Backdrop",
  component: BackdropContainer,
} as Meta

const Template: Story<BackdropContainerProps> = (args) => (
  <BackdropContainer {...args} />
)

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
