import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUserState {
  sasToken: string
  githubName: string
  githubImageURI: string
}

const initialUserState: IUserState = {
  sasToken: "",
  githubName: "",
  githubImageURI: "",
}

const userSlice = createSlice({
  name: "User",
  initialState: initialUserState,
  reducers: {
    setUserData(state, action: PayloadAction<IUserState>) {
      state.githubName = action.payload.githubName
      state.githubImageURI = action.payload.githubImageURI
      state.sasToken = action.payload.sasToken
    },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
