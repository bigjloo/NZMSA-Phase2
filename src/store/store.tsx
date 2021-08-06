import { configureStore } from "@reduxjs/toolkit"

import dialogReducer from "./dialogReducer"
import authReducer from "./authReducer"
import eventReducer from "./eventReducer"
import formReducer from "./formInputReducer"
import notificationReducer from "./notificationReducer"

const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    events: eventReducer,
    auth: authReducer,
    formInput: formReducer,
    notification: notificationReducer,
  },
})

export default store
