import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEventsState, IEvent } from "../common/types_interfaces";

const initialEventState: IEventsState = { events: [] };

const eventsSlice = createSlice({
  name: "events",
  initialState: initialEventState,
  reducers: {
    addEvent(state, action: PayloadAction<IEvent>) {
      state.events = [...state.events, action.payload];
    },
    removeEvent(state, action: PayloadAction<IEvent>) {},
  },
});

export const { addEvent, removeEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
