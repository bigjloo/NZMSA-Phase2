import { configureStore } from "@reduxjs/toolkit"

import dialogReducer from "./dialogReducer"
import authReducer from "./authReducer"
import eventReducer from "./eventReducer"
import formReducer from "./formInputReducer"
import notificationReducer from "./notificationReducer"
import cameraReducer from "./cameraReducer"
import videoReducer from "./videoReducer"
import azureStorageReducer from "./azureStorageReducer"
import sharedReducer from "./sharedReducer"

const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    events: eventReducer,
    auth: authReducer,
    formInput: formReducer,
    notification: notificationReducer,
    camera: cameraReducer,
    video: videoReducer,
    azureStorage: azureStorageReducer,
    shared: sharedReducer,
  },
})

export default store
