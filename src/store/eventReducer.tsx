import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IEvent } from "../common/types_interfaces"

export interface IEventsState {
  events: IEvent[]
  publishKey: string
}

const initialEventState: IEventsState = { events: [], publishKey: "" }

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
    setEvents(state, action: PayloadAction<any>) {
      let events: IEvent[] = []
      for (let event of action.payload) {
        events = [
          ...events,
          { name: event.name, description: event.description },
        ]
      }
      state.events = [...events]
    },
    setPublishKey(state, action) {
      state.publishKey = action.payload
    },
  },
})

export const { addEvent, removeEvent, setEvents, setPublishKey } =
  eventsSlice.actions

export default eventsSlice.reducer
