import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const CardDialogStyles = makeStyles((theme: Theme) => createStyles({
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
    },

    likeIcon: {
        color: theme.palette.secondary.light
    }
}))

export default CardDialogStyles