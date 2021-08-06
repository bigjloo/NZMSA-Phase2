import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"

type BackdropContainerProps = {
  loading: boolean
}

const BackdropContainer = ({ loading }: BackdropContainerProps) => {
  return (
    <Backdrop open={loading}>
      <CircularProgress />
    </Backdrop>
  )
}

export default BackdropContainer
