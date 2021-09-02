import { useEffect } from "react"
import { useAppSelector } from "../../store/storeHooks"
import { IEvent } from "../../store/eventReducer"
import { useMutation } from "@apollo/client"
import { SET_EVENTS } from "../../apollo-client/mutations"

const useSaveEvents = () => {
  const events = useAppSelector<IEvent[]>((state) => state.events.events)
  const publishKey = useAppSelector<string>((state) => state.events.publishKey)

  const [saveEvents, { loading, error }] = useMutation(SET_EVENTS, {
    variables: { events, publishKey },
  })

  // Save events to backend after ShareDialog is toggled
  useEffect(() => {
    publishKey && saveEvents()
  }, [publishKey, saveEvents])

  return { saveEvents, loading, error }
}

export default useSaveEvents
