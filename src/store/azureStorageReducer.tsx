import { createSlice } from "@reduxjs/toolkit"

const initialAzureStorageState = {
  token: undefined,
  containerName: undefined,
}

const azureStorageSlice = createSlice({
  name: "Azure Storage",
  initialState: initialAzureStorageState,
  reducers: {
    setTokenAndContainerName(state, action) {
      state.token = action.payload.token
      state.containerName = action.payload.github
    },
  },
})

export const { setTokenAndContainerName } = azureStorageSlice.actions

export default azureStorageSlice.reducer
