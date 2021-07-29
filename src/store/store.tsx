import { configureStore } from "@reduxjs/toolkit";

import dialogReducer from "./dialogReducer";
import authReducer from "./authReducer";
import eventReducer from "./eventReducer";
import formReducer from "./formInputReducer";

const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    events: eventReducer,
    auth: authReducer,
    formInput: formReducer,
  },
});

export default store;
