import { ChangeEvent } from "react"
import TextField from "@material-ui/core/TextField"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import {
  handleNameInputChange,
  handleDescriptionInputChange,
} from "../../store/formInputReducer"

const EventDialogTextFields = () => {
  const nameInput = useAppSelector<string>((state) => state.formInput.name)
  const descriptionInput = useAppSelector<string>(
    (state) => state.formInput.description
  )

  const dispatch = useAppDispatch()

  // Two way bind textfield input to local formInput state
  const onNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleNameInputChange(event.target.value))
  }
  const onDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleDescriptionInputChange(event.target.value))
  }
  return (
    <>
      <TextField
        value={nameInput}
        label="Event Name"
        autoFocus
        type="text"
        fullWidth
        color="secondary"
        onChange={onNameInputChange}
      />
      <TextField
        value={descriptionInput}
        label="Description"
        fullWidth
        color="secondary"
        onChange={onDescriptionInputChange}
      />
    </>
  )
}

export default EventDialogTextFields
