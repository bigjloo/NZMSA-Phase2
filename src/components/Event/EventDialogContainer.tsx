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
import { GET_SAS_TOKEN_AND_GITHUB } from "../../apollo-client/query"
import { setTokenAndContainerName } from "../../store/azureStorageReducer"
import BackdropContainer from "../UI/BackdropContainer"
import { openNotification } from "../../store/notificationReducer"

const EventDialogContainer = () => {
  const nameInput = useAppSelector<string>((state) => state.formInput.name)
  const descriptionInput = useAppSelector<string>(
    (state) => state.formInput.description
  )
  const openEventDialog = useAppSelector<boolean>(
    (state) => state.dialog.isEventDialogOpen
  )
  const cardImage = useAppSelector<Blob | undefined>(
    (state) => state.camera.cardImage
  )
  const token = useAppSelector<string | undefined>(
    (state) => state.azureStorage.token
  )
  const github = useAppSelector<string | undefined>(
    (state) => state.azureStorage.containerName
  )

  const dispatch = useAppDispatch()

  // Gets Share Access Storage(SaS) token and Github from backend
  const {
    data: tokenAndGithubData,
    loading,
    error,
  } = useQuery(GET_SAS_TOKEN_AND_GITHUB)

  // Close AddEvent dialog
  const toggleHandler = () => {
    dispatch(toggleEventDialog())
    dispatch(setCardImage(undefined))
  }

  // Two way bind textfield input to state
  const onNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleNameInputChange(event.target.value))
  }
  const onDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleDescriptionInputChange(event.target.value))
  }

  // Removes individual event from events state
  const onRemoveEvent = (index: number) => dispatch(removeEvent(index))
  console.log("inside eventDialogContainer")

  // Uploads cardImage(user photo) to Azure Storage and
  // adds event to events state
  const onAddEvent = async () => {
    let fileURL = null
    if (cardImage) {
      // Creates fileName from current datetime
      // and converts cardImage to File type
      const fileName = new Date().toISOString()
      const file = blobToFile(cardImage, fileName)

      // Use name of newly created file for fileURL
      fileURL = `${azureBlobURL}/${github}/${file.name}`

      try {
        // Uploads to Azure Storage Blob
        await uploadFileToBlob(file!, token!, github!)
      } catch (err) {
        console.error(err)
      }
    }

    // If cardImage != undefined, photoURI is set
    // to stored blob URL, else photoURI == null
    const eventsPayload = {
      name: nameInput,
      description: descriptionInput,
      photoURI: fileURL,
    }
    dispatch(addEvent(eventsPayload))

    dispatch(openNotification("Event succesfully added!"))
    dispatch(resetInputFields())
  }

  // Sets token and github state after data is fetch from backend
  useEffect(() => {
    if (tokenAndGithubData) {
      const { token, github } = tokenAndGithubData.accountSaSToken
      const payload = { token, github }
      dispatch(setTokenAndContainerName(payload))
    }
  }, [tokenAndGithubData, dispatch])

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
