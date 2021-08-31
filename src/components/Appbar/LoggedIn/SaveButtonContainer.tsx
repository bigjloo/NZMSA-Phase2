import IconButton from "@material-ui/core/IconButton"

import { useAppDispatch } from "../../../store/storeHooks"
import { openNotification } from "../../../store/notificationReducer"
import AppbarLoggedInStyles from "./AppbarLoggedInStyles"
import { useSaveEvents } from "./hooks"

type AppButtonProps = {
  clickHandler: () => void
}

const SaveButtonContainer = () => {
  const dispatch = useAppDispatch()
  const { saveEvents, loading, error } = useSaveEvents()

  const onSaveEvents = async () => {
    await saveEvents()
    if (!loading && !error) {
      dispatch(
        openNotification({
          message: "Events saved!",
          alertType: "success",
        })
      )
    }
  }

  return <SaveButton clickHandler={onSaveEvents} />
}

const SaveButton = ({ clickHandler }: AppButtonProps) => {
  const classes = AppbarLoggedInStyles()
  const saveButtonText = "Save"
  return (
    <IconButton
      className={classes.iconButton}
      edge="start"
      onClick={clickHandler}
    >
      {saveButtonText}
    </IconButton>
  )
}

export default SaveButtonContainer
