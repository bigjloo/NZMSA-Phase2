import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IEvent {
  name: string
  description: string
  photoURI: string | null | undefined
}

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

    setEvents(state, action: PayloadAction<IEvent[]>) {
      let events: IEvent[] = []
      for (const event of action.payload) {
        events = [
          ...events,
          {
            name: event.name,
            description: event.description,
            photoURI: event.photoURI,
          },
        ]
      }
      state.events = [...events]
    },

    setPublishKey(state, action: PayloadAction<string>) {
      state.publishKey = action.payload
    },
  },
})

export const {
  addEvent,
  removeEvent,
  setEvents,
  setPublishKey,
} = eventsSlice.actions

export default eventsSlice.reducer
