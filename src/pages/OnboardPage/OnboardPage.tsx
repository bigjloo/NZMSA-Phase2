import Typography from "@material-ui/core/Typography"
import LoginDialogContainer from "../../components/Dialogs/LoginDialog/LoginDialogContainer"
import OnboardStyles from "./OnboardStyles"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import randomImage from "../../assets/randomImage"

const OnboardPage = () => {
  const classes = OnboardStyles()
  return (
    <Container className={classes.container}>
      <PageHeading />
      <PageImage />
      <LoginDialogContainer />
    </Container>
  )
}

const PageHeading = () => {
  const classes = OnboardStyles()
  const subtitle = "Never a moment too dull"
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

const PageImage = () => {
  const classes = OnboardStyles()
  return (
    <Box className={classes.img}>
      <img className={classes.image} src={randomImage} alt="funny cat" />
    </Box>
  )
}

export default OnboardPage
