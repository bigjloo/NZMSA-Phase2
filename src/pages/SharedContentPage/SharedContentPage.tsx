import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"

import { IEvent } from "../../store/eventReducer"
import EventTimelineContainer from "../../components/EventTimeline/EventTimelineContainer"
import SharedContentStyles from "./SharedContentStyles"

export type SharedContentProps = {
  publisherName: string
  publishDate: string
  events: IEvent[]
}

type SharedContentHeaderProps = {
  title: string
  subtitle: string
}

const SharedContentPage = ({
  publisherName,
  publishDate,
  events,
}: SharedContentProps) => {
  return (
    <Container>
      <SharedContentPageHeader title={publisherName} subtitle={publishDate} />
      <EventTimelineContainer events={events} />
    </Container>
  )
}

const SharedContentPageHeader = ({
  title,
  subtitle,
}: SharedContentHeaderProps) => {
  const classes = SharedContentStyles()
  return (
    <Box className={classes.header} component="div">
      <Typography variant="h4" component="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </Box>
  )
}

export default SharedContentPage
