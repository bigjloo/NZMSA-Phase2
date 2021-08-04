import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IEvent } from "../common/types_interfaces"

export interface IEventsState {
  events: IEvent[]
}

const initialEventState: IEventsState = { events: [] }

const eventsSlice = createSlice({
  name: "Events",
  initialState: initialEventState,
  reducers: {
    addEvent(state, action: PayloadAction<IEvent>) {
      state.events = [...state.events, action.payload]
    },
    removeEvent(state, action: PayloadAction<number>) {
      state.events.splice(action.payload, 1)
    },
    editEvent(state, action) {},
    // TODO
    // Edit event.name or event.description
    setEvents(state, action: PayloadAction<Array<IEvent>>) {
      state.events = [...action.payload]
    },
  },
})

export const { addEvent, removeEvent, setEvents } = eventsSlice.actions

export default eventsSlice.reducer
