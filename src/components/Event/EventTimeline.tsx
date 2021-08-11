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
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { IEvent } from "../../store/eventReducer"
import FavoriteIcon from "@material-ui/icons/Favorite"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: window.innerWidth / 2,
    },
    cardImage: {
      height: "100%",
      width: "100%",
    },
    // remove later
    maxW: {
      width: "100%",
    },

    eventDescription: {
      fontSize: "0.75rem",
    },

    cardContent: {
      padding: "0.2rem",
      textAlign: "center",
    },

    favIcon: {
      fontSize: "small",
      margin: "0 0.5rem",
      color: theme.palette.secondary.main,
    },
  })
)

const EventTimeline = ({ events }: { events: IEvent[] }) => {
  const classes = useStyles()

  return (
    <Timeline align="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h6" component="h6">
              {event.name}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
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

              <CardContent className={classes.cardContent}>
                <Typography variant="body2">{event.description}</Typography>
              </CardContent>
              <Box>
                <FavoriteIcon className={classes.favIcon} />
              </Box>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default EventTimeline
