import { configureStore } from "@reduxjs/toolkit";

import dialogReducer from "./dialogReducer";
import authReducer from "./authReducer";
import eventReducer from "./eventReducer";

const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    events: eventReducer,
    auth: authReducer,
  },
});

export default store;
