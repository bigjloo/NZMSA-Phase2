import { makeStyles, createStyles, Theme } from "@material-ui/core"
import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      // position: "absolute",
      zIndex: theme.zIndex.drawer - 1,
      opacity: 0.3,
    },
  })
)

export type BackdropContainerProps = {
  loading: boolean
}

// No covering bottom navigation
const BackdropContainer = ({ loading }: BackdropContainerProps) => {
  const classes = useStyles()
  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress />
    </Backdrop>
  )
}

export default BackdropContainer
