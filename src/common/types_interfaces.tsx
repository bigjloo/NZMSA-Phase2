import { ChangeEvent } from "react";

// Component prop types
export type EventFormProps = {
  nameInput: string;
  descriptionInput: string;
  onAddEvent: () => void;
  toggleDialogHandler: () => void;
  onNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDescriptionInputChange: (input: ChangeEvent<HTMLInputElement>) => void;
};

export type EventListProps = {
  onRemoveEvent: (index: number) => void;
};

// Store
export interface IDialogState {
  isEventDialogOpen: boolean;
  isShareDialogOpen: boolean;
}

export interface IEvent {
  name: string;
  description: string;
}

export interface IEventsState {
  events: IEvent[];
}
