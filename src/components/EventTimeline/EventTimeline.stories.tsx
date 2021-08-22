import { Meta, Story } from "@storybook/react"
import EventTimelineContainer from "./EventTimelineContainer"
import { IEvent } from "../../store/eventReducer"

export default {
  title: "Components/Event Timeline",
} as Meta

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
]

export const AppEventTimeline: Story<{ events: IEvent[] }> = (args) => (
  <EventTimelineContainer {...args} />
)
AppEventTimeline.storyName = "Timeline"
AppEventTimeline.args = {
  events: mockEvents,
}
