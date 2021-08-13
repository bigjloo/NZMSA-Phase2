import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const EventStyles = makeStyles((theme: Theme) => createStyles({
    // EventList
    eventList: {
        removeEventButton: {
            color: theme.palette.secondary.main,
          },
    },
   
    
    //EventTimeline
    eventTimeline: {
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
            padding: "0.5rem",
            textAlign: "center",
        },
    },
    
    
    // EventDialogContent
    eventDialogContent: {
        title: {
            padding: "0",
            color: theme.palette.primary.dark,
          },
      
        addEventButton: {
            color: theme.palette.primary.dark,
        },
    }
    
}))

export default EventStyles