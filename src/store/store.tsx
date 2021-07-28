import { configureStore } from "@reduxjs/toolkit";

import dialogReducer from "./dialogReducer";
import authReducer from "./authReducer";

const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    auth: authReducer,
  },
});

export default store;
