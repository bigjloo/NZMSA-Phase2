import { useAppSelector } from "../../store/storeHooks"

import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from "@material-ui/styles"

export interface IEvent {
  name: string
  description: string
  photo: string
}

const useStyles = makeStyles({
  media: {
    height: 100,
  },
})

const EventTimeline = () => {
  const events = useAppSelector<IEvent[]>((store) => store.events.events)
  const classes = useStyles()

  return (
    <Timeline align="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="subtitle2">{event.name}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card>
              <CardMedia className={classes.media}>
                <img
                  src={event.photo}
                  alt="user snaps"
                  style={{ height: "100%" }}
                />
              </CardMedia>
              <CardContent>
                <Typography variant="body2">{event.description}</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default EventTimeline
