import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"

import BackdropStyles from "./BackdropStyles"

export type BackdropContainerProps = {
  loading: boolean
}

const BackdropContainer = ({ loading }: BackdropContainerProps) => {
  const classes = BackdropStyles()

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress />
    </Backdrop>
  )
}

export default BackdropContainer
