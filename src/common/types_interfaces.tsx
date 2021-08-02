import { ChangeEvent } from "react"

// Components
export type EventDialogContentProps = {
  nameInput: string
  descriptionInput: string
  onAddEvent: () => void
  toggleDialogHandler: () => void
  onNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDescriptionInputChange: (input: ChangeEvent<HTMLInputElement>) => void
}

export type EventListProps = {
  onRemoveEvent: (index: number) => void
}

export type LoginDialogContentProps = {
  githubAuthURL: string
  login: () => void
  signup: () => void
}

// Store
export interface IDialogState {
  isEventDialogOpen: boolean
  isShareDialogOpen: boolean
  isLoginDialogOpen: boolean
}

export interface IEvent {
  name: string
  description: string
}

export interface IEventsState {
  events: IEvent[]
}
