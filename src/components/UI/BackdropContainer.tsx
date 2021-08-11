import { makeStyles } from "@material-ui/core"
import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"
import theme from "../../theme"

const transitionProps = {
  appear: 300,
}

const useStyles = makeStyles({
  backdrop: {
    position: "absolute",
    zIndex: theme.zIndex.drawer - 1,
    opacity: 0.3,
  },
})

type BackdropContainerProps = {
  loading: boolean
}

// No covering bottom navigation
const BackdropContainer = ({ loading }: BackdropContainerProps) => {
  const classes = useStyles()
  return (
    <Backdrop
      open={loading}
      transitionDuration={transitionProps}
      className={classes.backdrop}
    >
      <CircularProgress />
    </Backdrop>
  )
}

export default BackdropContainer
