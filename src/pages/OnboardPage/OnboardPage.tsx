import Typography from "@material-ui/core/Typography"
import LoginDialogContainer from "../../components/Dialogs/LoginDialog/LoginDialogContainer"
import OnboardStyles from "./OnboardStyles"
import Box from "@material-ui/core/Box"
import randomImage from "../../assets/randomImage"

const Onboard = () => {
  const classes = OnboardStyles()
  return (
    <Box>
      <Box className={classes.container}>
        <Box>
          <Typography variant="h3" component="h3">
            <span style={{ color: "#FF449F" }}>H</span>ows
          </Typography>
          <Typography variant="h3" component="h3">
            <span style={{ color: "#ED8E7C" }}>Y</span>our
          </Typography>
          <Typography variant="h3" component="h3">
            <span style={{ color: "#AE00FB" }}>D</span>ay
          </Typography>
          <Typography variant="h6" component="h6">
            Never a moment too dull to share
          </Typography>
        </Box>
        <Box className={classes.img}>
          <img
            className={classes.image}
            src={randomImage}
            alt="cat with fishbowl"
          />
        </Box>
      </Box>
      <LoginDialogContainer />
    </Box>
  )
}

export default Onboard
