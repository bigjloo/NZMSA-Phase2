import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IEvent } from "./eventReducer"

type ICardState = {
  isCardDialogOpen: boolean
  eventSelected: IEvent | undefined
}

const initialCardState: ICardState = {
  isCardDialogOpen: false,
  eventSelected: undefined,
}

const cardSlice = createSlice({
  name: "Card Selected",
  initialState: initialCardState,
  reducers: {
    setEventSelected(state, action: PayloadAction<IEvent>) {
      state.eventSelected = action.payload
      state.isCardDialogOpen = true
    },
    toggleIsCardDialogOpen(state) {
      state.isCardDialogOpen = !state.isCardDialogOpen
    },
  },
})

export const { setEventSelected, toggleIsCardDialogOpen } = cardSlice.actions

export default cardSlice.reducer
