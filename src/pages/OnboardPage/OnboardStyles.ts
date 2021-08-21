import { makeStyles, createStyles } from "@material-ui/core/styles"

const OnboardStyles = makeStyles(() => createStyles({
    container: {
        height: "calc(100vh - 6rem)",
        // border: "2px solid black",
        padding: "1rem",
    },

    image: {
        width: "100%",
        maxWidth: "500px",
        // border: "1px solid red",

    },

    img: {
        height: "calc(100% - 5rem)",
        // border: "1px solid blue",
        textAlign: "center",
    }
}))

export default OnboardStyles