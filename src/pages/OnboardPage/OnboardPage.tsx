import Typography from "@material-ui/core/Typography"
import LoginDialogContainer from "../../components/Dialogs/LoginDialog/LoginDialogContainer"
import OnboardStyles from "./OnboardStyles"
import Box from "@material-ui/core/Box"
import randomImage from "../../assets/randomImage"

const OnboardPage = () => {
  const classes = OnboardStyles()
  return (
    <>
      <Box className={classes.container}>
        <OnboardPageHeading />
        <OnboardPageImage />
      </Box>
      <LoginDialogContainer />
    </>
  )
}

const OnboardPageHeading = () => {
  const classes = OnboardStyles()
  const subtitle = "Never a moment too dull to share"
  return (
    <Box>
      <Typography variant="h3" component="h3">
        <span className={classes.H}>H</span>ows
      </Typography>
      <Typography variant="h3" component="h3">
        <span className={classes.Y}>Y</span>our
      </Typography>
      <Typography variant="h3" component="h3">
        <span className={classes.D}>D</span>ay
      </Typography>
      <Typography variant="h6" component="h6">
        {subtitle}
      </Typography>
    </Box>
  )
}

const OnboardPageImage = () => {
  const classes = OnboardStyles()
  return (
    <Box className={classes.img}>
      <img className={classes.image} src={randomImage} alt="funny cat" />
    </Box>
  )
}

export default OnboardPage
