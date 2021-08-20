import Typography from "@material-ui/core/Typography"
import LoginDialogContainer from "../../components/Dialogs/LoginDialog/LoginDialogContainer"
import OnboardStyles from "./OnboardStyles"
// import Box from "@material-ui/core/Box"
import image from "../../assets/Lazy_Cat_with_fishes_transparent_by_Icons8.gif"
// import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

// Short tutorial or onboarding user front page
const Onboard = () => {
  const classes = OnboardStyles()
  return (
    <Grid container>
      <Grid item className={classes.headline}>
        <Typography variant="h3" component="h3">
          HowsYourDay
        </Typography>
        <Typography variant="h6" component="h6">
          Connect, Share, Experience
        </Typography>
      </Grid>
      <Grid
        container
        className={classes.illustration}
        justifyContent="center"
        direction="column"
      >
        <img className={classes.image} src={image} alt="cat with fishbowl" />
      </Grid>
      <LoginDialogContainer />
    </Grid>
  )
}

export default Onboard
