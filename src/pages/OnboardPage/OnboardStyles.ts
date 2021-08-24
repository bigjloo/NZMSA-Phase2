import { makeStyles, createStyles } from "@material-ui/core/styles"

const OnboardStyles = makeStyles(() => createStyles({
    container: {
        height: "calc(100vh - 6rem)",
        padding: "1rem",
    },

    image: {
        width: "100%",
        maxWidth: "500px",
    },

    img: {
        height: "calc(100% - 5rem)",
        textAlign: "center",
    }
}))

export default OnboardStyles