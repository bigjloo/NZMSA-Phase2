// import IconButton from "@material-ui/core/IconButton"
// import Button from "@material-ui/core/Button"
// import { useMutation } from "@apollo/client"
// import { SET_EVENTS } from "../../../apollo-client/mutations"
// import { useAppDispatch, useAppSelector } from "../../../store/storeHooks"
// import { IEvent } from "../../../store/eventReducer"
// import { openNotification } from "../../../store/notificationReducer"

// const SaveEventsContainer = () => {
//   const dispatch = useAppDispatch()
//   const events = useAppSelector<IEvent[]>((state) => state.events.events)
//   const publishKey = useAppSelector<string>((state) => state.events.publishKey)
//   const [saveEvents, { loading, error }] = useMutation(SET_EVENTS, {
//     variables: { events, publishKey },
//   })

//   // Save user events to backend without publishKey
//   const onSaveEvents = async () => {
//     await saveEvents()
//     if (!loading && !error) {
//       dispatch(
//         openNotification({
//           message: "Events saved!",
//           alertType: "success",
//         })
//       )
//     }
//   }

//   return (
//     <IconButton
//       className={classes.iconButton}
//       edge="start"
//       onClick={onSaveEvents}
//     >
//       <Button>save</Button>
//     </IconButton>
//   )
// }

// export default SaveEventsContainer
export {}
