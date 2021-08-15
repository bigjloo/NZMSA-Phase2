import { createStyles, makeStyles } from "@material-ui/core/styles";

const EventTimelineCardStyles = makeStyles(() => createStyles({
    card: {
        maxWidth: window.innerWidth / 2,
        padding: "0",
        margin: "0",
    },
    cardImage: {
      height: "100%",
      width: "100%",
    },

    cardContent: {
      textAlign: "center",
    },
}))

export default EventTimelineCardStyles