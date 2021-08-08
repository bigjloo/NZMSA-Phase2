import { useMemo, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../store/storeHooks"

import { styled } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"

import LoggedInNavigation from "./LoggedInNavigation"
import NotLoggedInNavigation from "./NotLoggedInNavigation"
import { useMutation } from "@apollo/client"
import { SET_EVENTS } from "../../apollo-client/query"
import {
  toggleEventDialog,
  toggleShareDialog,
  toggleLoginDialog,
} from "../../store/dialogReducer"
import { setPublishKey } from "../../store/eventReducer"
import { openNotification } from "../../store/notificationReducer"
import { IEvent } from "../../common/types_interfaces"

const StyledBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  left: 0,
  bottom: 0,
  borderRadius: "20px 20px 0 0",
  backgroundColor: "#EEEEEE",
})

const NavigationContainer = () => {
  const [isAuth, events, publishKey] = useAppSelector<
    [boolean, IEvent[], string]
  >((state) => [
    state.auth.isAuth,
    state.events.events,
    state.events.publishKey,
  ])

  // Generates 8 random alphanumeric char string
  const key = useMemo(() => {
    return [...Array(8)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("")
  }, [])

  const dispatch = useAppDispatch()

  const openEventDialog = () => dispatch(toggleEventDialog())

  const openLoginDialog = () => dispatch(toggleLoginDialog())

  const openShareDialog = () => {
    dispatch(setPublishKey(key))
    dispatch(toggleShareDialog())
  }

  const [saveEvents] = useMutation(SET_EVENTS, {
    variables: { events, publishKey },
  })

  // Save events without publishKey
  const saveEventsHandler = () => {
    saveEvents()
    dispatch(openNotification("Events saved!!!"))
  }

  // Save events to backend when ShareDialog is toggled, after
  // publishkey is set by redux
  useEffect(() => {
    saveEvents()
  }, [publishKey, saveEvents])

  return (
    <StyledBottomNavigation showLabels>
      {isAuth ? (
        <LoggedInNavigation
          openEventDialog={openEventDialog}
          saveEventsHandler={saveEventsHandler}
          openShareDialog={openShareDialog}
        />
      ) : (
        <NotLoggedInNavigation openLoginDialog={openLoginDialog} />
      )}
    </StyledBottomNavigation>
  )
}

export default NavigationContainer
