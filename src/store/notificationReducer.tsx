import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface INotificationState {
  open: boolean
  message: string
  alertType: "success" | "error" | "info"
}

interface IAlertPayload
  extends Pick<INotificationState, "message" | "alertType"> {}

const initialNotificationState: INotificationState = {
  open: false,
  message: "",
  alertType: "success",
}

const notificationSlice = createSlice({
  name: "Notification",
  initialState: initialNotificationState,
  reducers: {
    openNotification(state, action: PayloadAction<IAlertPayload>) {
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
