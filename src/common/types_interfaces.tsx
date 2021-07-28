import store from "../store/store";

export type BottomStickyProps = {
  openModal: () => void;
};

export type EventFormProps = {
  addEvent: () => void;
  toggleHandler: () => void;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface DialogState {
  isOpen: boolean;
}
