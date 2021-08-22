import { configureStore } from "@reduxjs/toolkit"

import dialogReducer from "./dialogReducer"
import authReducer from "./authReducer"
import eventReducer from "./eventReducer"
import formReducer from "./formInputReducer"
import notificationReducer from "./notificationReducer"
import cameraReducer from "./cameraReducer"
import sharedReducer from "./sharedReducer"
import userReducer from "./userReducer"
import themeReducer from "./themeReducer"
import cardReducer from "./cardReducer"

const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    events: eventReducer,
    auth: authReducer,
    formInput: formReducer,
    notification: notificationReducer,
    camera: cameraReducer,
    shared: sharedReducer,
    user: userReducer,
    theme: themeReducer,
    card: cardReducer,
  },
})

export default store
