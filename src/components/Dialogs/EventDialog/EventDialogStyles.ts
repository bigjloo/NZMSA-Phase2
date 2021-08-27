import { makeStyles, createStyles } from "@material-ui/core/styles"

const EventDialogStyles = makeStyles(() => createStyles({
    title: {
        padding: "0",
    },
    
    dialogContent: {
        "& > *": {
          padding: "0.5rem 0",
        },
    },
  
    dialogActions: {
        margin: "0.5rem 0",
    },
}))

export default EventDialogStyles