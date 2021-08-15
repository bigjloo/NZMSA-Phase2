import { createStyles, makeStyles } from "@material-ui/core/styles";

const EventTimelineStyles = makeStyles(() =>
  createStyles({
    // card: {
    //   maxWidth: window.innerWidth / 2,
    //   padding: "0",
    //   margin: "0",
    // },
    // cardImage: {
    //   height: "100%",
    //   width: "100%",
    // },
    // remove later
    maxW: {
      width: "100%",
    },

    eventDescription: {
      fontSize: "0.5rem",
    },

    // cardContent: {
    //   textAlign: "center",
    // },
  })
)

export default EventTimelineStyles