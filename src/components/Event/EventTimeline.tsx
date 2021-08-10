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
  photoURI: string | null
}

const useStyles = makeStyles({
  card: {
    maxWidth: window.innerWidth / 2,
  },
  cardImage: {
    height: "100%",
    width: "100%",
  },
})

const EventTimeline = ({ events }: { events: IEvent[] }) => {
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
            <Card className={classes.card}>
              {event.photoURI && (
                <CardMedia>
                  <img
                    src={event.photoURI}
                    alt="user snaps"
                    className={classes.cardImage}
                  />
                </CardMedia>
              )}

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
