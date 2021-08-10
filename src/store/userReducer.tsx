import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUserState {
  githubName: string
  githubImageURI: string
}

const initialUserState: IUserState = {
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
    },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
