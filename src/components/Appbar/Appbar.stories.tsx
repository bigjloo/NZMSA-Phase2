import { Meta, Story } from "@storybook/react"
// import Provider from "../../Provider"
// import store from "../../store/store"

import Appbar from "./AppbarContainer"
import AppbarNotLoggedIn from "./AppbarNotLoggedIn"
import AppbarLoggedIn from "./AppbarLoggedIn"
// import { AppContainerProps } from "./AppbarContainer"
// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
// import { decorators } from "../../../.storybook/preview"

export default {
  title: "AppBar",
  component: Appbar,
  argTypes: {},
} as Meta

// const mockedClient = new ApolloClient({
//   uri: "https://your-graphql-endpoint",
//   cache: new InMemoryCache(),
// })

// const Template: Story<AppContainerProps> = (args) => <Appbar {...args} />

// export const LoggedIn = Template.bind({})
// LoggedIn.args = {
//   children: <AppbarLoggedIn />,
// }

export const LoggedInAppbar: Story = () => <AppbarLoggedIn />

export const LoggedOutAppbar: Story = () => <AppbarNotLoggedIn />

// export const LoggedOut = Template.bind({})
// LoggedOut.args = {
//   children: <AppbarNotLoggedIn />,
// }
