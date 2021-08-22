import { makeStyles, createStyles } from "@material-ui/core";

const CardDialogStyles = makeStyles(() => createStyles({
    dialog: {
        padding: "0",
        "&:first-child": {
            paddingTop: "0px"
        }
    },
    card: {
        margin: "0",
        paddingTop: "0px",
        maxWidth: "100%"
    },
    cardImage: {
        maxWidth: "100%",
    }
}))

export default CardDialogStyles