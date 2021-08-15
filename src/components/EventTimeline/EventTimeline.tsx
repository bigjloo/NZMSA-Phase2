import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import Typography from "@material-ui/core/Typography"
// import Card from "@material-ui/core/Card"
// import CardMedia from "@material-ui/core/CardMedia"
// import CardContent from "@material-ui/core/CardContent"
// import { makeStyles, createStyles } from "@material-ui/core/styles"
import { IEvent } from "../../store/eventReducer"
// import EventTimelineStyles from "./EventTimelineStyles"
import EventTimelineCard from "../EventTimelineCard/EventTimelineCard"

// const useStyles = makeStyles(() =>
//   createStyles({
//     card: {
//       maxWidth: window.innerWidth / 2,
//       padding: "0",
//       margin: "0",
//     },
//     cardImage: {
//       height: "100%",
//       width: "100%",
//     },
//     // remove later
//     maxW: {
//       width: "100%",
//     },

//     eventDescription: {
//       fontSize: "0.5rem",
//     },

//     cardContent: {
//       textAlign: "center",
//     },

//     // favIcon: {
//     //   fontSize: "small",
//     //   margin: "0 0.5rem",
//     //   color: theme.palette.secondary.main,
//     // },
//   })
// )

const EventTimeline = ({ events }: { events: IEvent[] }) => {
  // const classes = EventTimelineStyles()

  return (
    <Timeline align="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="overline">{event.name}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <EventTimelineCard event={event} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default EventTimeline