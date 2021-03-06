import { Meta, Story } from "@storybook/react"
import Dialog from "@material-ui/core/Dialog"
import EventDialogContent, {
  EventDialogContentProps,
} from "./EventDialog/EventDialogContent"
import ShareDialog, { ShareDialogProps } from "./ShareDialog/ShareDialog"
import LoginDialog, { LoginDialogProps } from "./LoginDialog/LoginDialog"
import { IEvent } from "../../store/eventReducer"
import EventCardDialog, {
  EventCardDialogProps,
} from "./EventCardDialog/EventCardDialog"
import EventDialogList from "./EventDialog/EventDialogList"

const mockEvents: IEvent[] = [
  {
    name: "9AM",
    description: "Some mock event description",
    photoURI:
      "https://eb8e7f6d53.nxcli.net/wp-content/uploads/2016/11/13240524_945363782229095_1615803886946724561_n.jpg",
  },
  {
    name: "12PM",
    description: "Some mock event description 2",
    photoURI:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.womentriangle.com%2Fwp-content%2Fuploads%2F2020%2F04%2Fjn1-768x512.jpg&f=1&nofb=1",
  },
  {
    name: "7PM",
    description: "Some mock event description 3",
    photoURI:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.flare.com%2Fwp-content%2Fuploads%2F2017%2F03%2FUltra.jpg&f=1&nofb=1",
  },
]

export default {
  title: "Components/Dialogs",
} as Meta

export const AppLoginDialog: Story<LoginDialogProps> = (args) => (
  <LoginDialog {...args} />
)
AppLoginDialog.storyName = "Login Dialog"
AppLoginDialog.args = {
  isLoginDialogOpen: true,
}

export const AppEventDialog: Story<EventDialogContentProps> = (args) => (
  <Dialog open>
    <EventDialogList
      events={mockEvents}
      onRemoveEvent={() => alert("Removing event")}
    />
    <EventDialogContent {...args} />
  </Dialog>
)
AppEventDialog.storyName = "Event Dialog"

export const AppShareDialog: Story<ShareDialogProps> = (args) => (
  <ShareDialog {...args} />
)
AppShareDialog.storyName = "Share Dialog"
AppShareDialog.args = {
  publishURL: "http://www.example.com/examp1e",
  isShareDialogOpen: true,
  onCopyToClipboard: () => alert("copied to clipboard"),
}

export const AppCardDialog: Story<EventCardDialogProps> = (args) => (
  <EventCardDialog {...args} />
)
AppCardDialog.storyName = "Card Dialog"
AppCardDialog.args = {
  event: mockEvents[0],
  isCardDialogOpen: true,
}
