import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface INotification {
  open: boolean
  message: string
}

const initialNotificationState: INotification = {
  open: false,
  message: "",
}

const notificationSlice = createSlice({
  name: "Notification",
  initialState: initialNotificationState,
  reducers: {
    openNotification(state, action: PayloadAction<string>) {
      state.open = true
      state.message = action.payload
    },
    closeNotification(state) {
      state.open = false
    },
  },
})

export const { openNotification, closeNotification } = notificationSlice.actions

export default notificationSlice.reducer
