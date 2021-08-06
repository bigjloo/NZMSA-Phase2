import { createSlice } from "@reduxjs/toolkit"

const initialNotificationState = {
  open: false,
  message: "",
}

const notificationSlice = createSlice({
  name: "Notification",
  initialState: initialNotificationState,
  reducers: {
    openNotification(state, action) {
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
