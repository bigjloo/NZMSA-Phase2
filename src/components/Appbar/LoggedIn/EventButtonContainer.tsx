import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"

import { useAppDispatch } from "../../../store/storeHooks"
import AppbarLoggedInStyles from "./AppbarLoggedInStyles"
import { toggleEventDialog } from "../../../store/dialogReducer"

const EventButtonContainer = () => {
  const fabButton = AppbarLoggedInStyles().fabButton
  const dispatch = useAppDispatch()
  const onOpenEventDialog = () => dispatch(toggleEventDialog())
  return (
    <Fab className={fabButton}>
      <AddIcon onClick={onOpenEventDialog} fontSize="large" />
    </Fab>
  )
}

export default EventButtonContainer
