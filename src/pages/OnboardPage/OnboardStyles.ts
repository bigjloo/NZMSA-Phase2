import { makeStyles, createStyles } from "@material-ui/core/styles"

const OnboardStyles = makeStyles(() => createStyles({
    container: {
        height: "100vh",
        border: "25px solid blue",
        padding: "0",
    },

    headline: {
        border: "1px solid blue"
    },

    illustration: {
        top: "50%",
        bottom: "50%",
        maxWidth: "100%",
        border: "1px solid green"
    },

    image: {
        width: "100%",
        height: "100%",
        border: "1px solid red"
    }
}))

export default OnboardStyles