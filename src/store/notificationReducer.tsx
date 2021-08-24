import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface INotificationPayload {
  message: string
  alertType: "success" | "error" | "info"
}

interface INotification extends INotificationPayload {
  open: boolean
}

const initialNotificationState: INotification = {
  open: false,
  message: "",
  alertType: "success",
}

const notificationSlice = createSlice({
  name: "Notification",
  initialState: initialNotificationState,
  reducers: {
    openNotification(state, action: PayloadAction<INotificationPayload>) {
      state.open = true
      state.message = action.payload.message
      state.alertType = action.payload.alertType
    },
    closeNotification(state) {
      state.open = false
    },
  },
})

export const { openNotification, closeNotification } = notificationSlice.actions

export default notificationSlice.reducer
