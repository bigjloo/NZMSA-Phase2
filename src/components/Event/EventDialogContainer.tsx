import { ChangeEvent, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { useQuery } from "@apollo/client"

import { toggleEventDialog } from "../../store/dialogReducer"
import { addEvent, removeEvent } from "../../store/eventReducer"
import {
  handleNameInputChange,
  handleDescriptionInputChange,
  resetInputFields,
} from "../../store/formInputReducer"

import EventDialog from "./EventDialog"
import { setCardImage } from "../../store/cameraReducer"
import uploadFileToBlob, {
  blobToFile,
  azureBlobURL,
} from "../../api/azure-storage-blob"
import { GET_TOKEN_AND_GITHUB } from "../../apollo-client/query"
import { setTokenAndContainerName } from "../../store/azureStorageReducer"
import BackdropContainer from "../UI/BackdropContainer"

const EventDialogContainer = () => {
  const [
    nameInput,
    descriptionInput,
    openEventDialog,
    cardImage,
    token,
    github,
  ] = useAppSelector((state) => [
    state.formInput.name,
    state.formInput.description,
    state.dialog.isEventDialogOpen,
    state.camera.cardImage,
    state.azureStorage.token,
    state.azureStorage.containerName,
  ])

  const dispatch = useAppDispatch()

  const { data, loading, error } = useQuery(GET_TOKEN_AND_GITHUB)

  const toggleHandler = () => {
    dispatch(toggleEventDialog())
    dispatch(setCardImage(undefined))
  }

  const onNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleNameInputChange(event.target.value))
  }
  const onDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleDescriptionInputChange(event.target.value))
  }

  console.log(cardImage)

  const onRemoveEvent = (index: number) => dispatch(removeEvent(index))

  const onAddEvent = async () => {
    console.log("inside onAddEvent")
    const fileName = new Date().toISOString()
    const file = blobToFile(cardImage, fileName)
    console.log(file)
    const fileURL = `${azureBlobURL}/${github}/${file?.name}`
    console.log(fileURL)
    // TODO fix undefined null issue later
    await uploadFileToBlob(file!, token!, github!)
    console.log("success upload")
    const payload = {
      name: nameInput,
      description: descriptionInput,
      photoURI: fileURL,
    }
    dispatch(addEvent(payload))
    dispatch(resetInputFields())
  }

  useEffect(() => {
    console.log("inside useeffect for setTokenandContainerName")
    console.log(data)
    if (data) {
      const { token, github } = data.accountSaSToken
      const payload = { token, github }
      dispatch(setTokenAndContainerName(payload))
    }
  }, [data, dispatch])

  if (loading) return <BackdropContainer loading={loading} />

  if (error) return <h1>{error.message}</h1>

  return (
    <EventDialog
      nameInput={nameInput}
      descriptionInput={descriptionInput}
      openEventDialog={openEventDialog}
      onAddEvent={onAddEvent}
      toggleDialogHandler={toggleHandler}
      onNameInputChange={onNameInputChange}
      onDescriptionInputChange={onDescriptionInputChange}
      onRemoveEvent={onRemoveEvent}
      toggleHandler={toggleHandler}
    />
  )
}

export default EventDialogContainer
