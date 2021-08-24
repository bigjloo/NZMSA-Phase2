import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import EventTimelineContainer from "../../components/EventTimeline/EventTimelineContainer"

import LoginDialogContainer from "../../components/Dialogs/LoginDialog/LoginDialogContainer"
import { IEvent } from "../../store/eventReducer"
import SharedContentStyles from "./SharedContentStyles"

export type SharedContentProps = {
  publisherName: string
  publishDate: string
  events: IEvent[]
}

const SharedContent = ({
  publisherName,
  publishDate,
  events,
}: SharedContentProps) => {
  const classes = SharedContentStyles()
  return (
    <>
      <Box className={classes.header} component="div">
        <Typography variant="h4" component="h4" gutterBottom>
          {publisherName}
        </Typography>
        <Typography variant="subtitle1">{publishDate}</Typography>
      </Box>
      <EventTimelineContainer events={events} />
      <LoginDialogContainer />
    </>
  )
}

export default SharedContent
