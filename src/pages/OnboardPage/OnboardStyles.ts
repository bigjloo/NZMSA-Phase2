import { makeStyles, createStyles } from "@material-ui/core/styles"

const OnboardStyles = makeStyles(() => createStyles({
    container: {
        height: "calc(100vh - 6rem)",
        padding: "3rem",
    },

    image: {
        width: "100%",
        maxWidth: "500px",
    },

    img: {
        height: "calc(100% - 5rem)",
        textAlign: "center",
    },

    H: {
        color: "#FF449F" 
    },

    Y: {
        color: "#ED8E7C" 
    },

    D: {
        color: "#AE00FB"
    }
}))

export default OnboardStyles