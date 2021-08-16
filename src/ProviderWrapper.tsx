import { EnhancedStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

// from https://www.digitalocean.com/community/tutorials/react-storybook-with-redux

const ProviderWrapper = ({
  children,
  store,
}: {
  children: JSX.Element
  store: EnhancedStore
}) => <Provider store={store}>{children}</Provider>

export default ProviderWrapper
