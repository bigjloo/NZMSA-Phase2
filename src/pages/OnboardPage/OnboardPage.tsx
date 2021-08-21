import Typography from "@material-ui/core/Typography"
import LoginDialogContainer from "../../components/Dialogs/LoginDialog/LoginDialogContainer"
import OnboardStyles from "./OnboardStyles"
import Box from "@material-ui/core/Box"
import image from "../../assets/Lazy_Cat_with_fishes_transparent_by_Icons8.gif"
// import Container from "@material-ui/core/Container"
// import Grid from "@material-ui/core/Grid"

// Short tutorial or onboarding user front page
const Onboard = () => {
  const classes = OnboardStyles()
  return (
    <Box>
      {/* <Grid item className={classes.headline}>
        <Typography variant="h3" component="h3">
          HowsYourDay
        </Typography>
        <Typography variant="h6" component="h6">
          Never a moment too dull
        </Typography>
      </Grid>
      <Grid
        container
        className={classes.illustration}
        justifyContent="center"
        direction="column"
      >
        <img className={classes.image} src={image} alt="cat with fishbowl" />
      </Grid> */}
      <Box className={classes.container}>
        <Box>
          <Typography variant="h3" component="h3">
            <span style={{ color: "#FF449F" }}>H</span>ows
            <span style={{ color: "#ED8E7C" }}>Y</span>our
            <span style={{ color: "#AE00FB" }}>D</span>ay
          </Typography>
          <Typography variant="h6" component="h6">
            Never a moment too dull
          </Typography>
        </Box>
        <Box className={classes.img}>
          <img className={classes.image} src={image} alt="cat with fishbowl" />
        </Box>
      </Box>
      <LoginDialogContainer />
    </Box>
  )
}

export default Onboard
