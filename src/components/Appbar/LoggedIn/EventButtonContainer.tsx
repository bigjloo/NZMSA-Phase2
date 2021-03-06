import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"

import { useAppDispatch } from "../../../store/storeHooks"
import { toggleEventDialog } from "../../../store/dialogReducer"
import AppbarLoggedInStyles from "./AppbarLoggedInStyles"

const EventButtonContainer = () => {
  const classes = AppbarLoggedInStyles()
  const dispatch = useAppDispatch()
  const onOpenEventDialog = () => dispatch(toggleEventDialog())
  return (
    <Fab className={classes.fabButton}>
      <AddIcon onClick={onOpenEventDialog} fontSize="large" />
    </Fab>
  )
}

export default EventButtonContainer
