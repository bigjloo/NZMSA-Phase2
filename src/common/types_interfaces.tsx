import store from "../store/store";
import { MutableRefObject } from "react";

// Component prop types
export type BottomStickyProps = {
  openModal: () => void;
};

export type EventFormProps = {
  onAddEvent: () => void;
  toggleDialogHandler: () => void;
  nameRef: MutableRefObject<HTMLInputElement | null | undefined>;
  captionRef: MutableRefObject<HTMLInputElement | null | undefined>;
};

export type EventListProps = {
  onRemoveEvent: () => void;
};

// Store
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface IDialogState {
  isOpen: boolean;
}

export interface IEvent {
  name: string;
  caption: string;
}

export interface IEventsState {
  events: IEvent[];
}
