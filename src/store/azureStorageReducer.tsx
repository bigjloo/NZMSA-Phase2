import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IAzureStorageState {
  token: string | undefined
  containerName: string | undefined
}

const initialAzureStorageState: IAzureStorageState = {
  token: undefined,
  containerName: undefined,
}

const azureStorageSlice = createSlice({
  name: "Azure Storage",
  initialState: initialAzureStorageState,
  reducers: {
    setTokenAndContainerName(
      state,
      action: PayloadAction<{ token: string; github: string }>
    ) {
      state.token = action.payload.token
      state.containerName = action.payload.github
    },
  },
})

export const { setTokenAndContainerName } = azureStorageSlice.actions

export default azureStorageSlice.reducer
