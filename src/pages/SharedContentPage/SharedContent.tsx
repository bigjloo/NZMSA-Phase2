import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import EventTimeline from "../../components/EventTimeline/EventTimeline"

import LoginDialogContainer from "../../components/Dialogs/LoginDialog/LoginDialogContainer"
import { IEvent } from "../../store/eventReducer"

type SharedContentProps = {
  publisherName: string
  publishDate: string
  events: IEvent[]
}

const SharedContent = ({
  publisherName,
  publishDate,
  events,
}: SharedContentProps) => {
  return (
    <>
      <Box style={{ margin: "1rem 2rem" }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {publisherName}
        </Typography>
        <Typography variant="subtitle1">{publishDate}</Typography>
      </Box>
      <EventTimeline events={events} />
      <LoginDialogContainer />
    </>
  )
}

export default SharedContent
