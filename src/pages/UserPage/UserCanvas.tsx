import EventTimeline from "../../components/Event/EventTimeline"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { IEvent } from "../../store/eventReducer"
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { toggleTheme } from "../../store/themeReducer"

const UserCanvasStyle = makeStyles(() =>
  createStyles({
    themeToggle: {
      margin: "1rem",
    },
  })
)

// Style
const UserCanvas = () => {
  const events = useAppSelector<IEvent[]>((store) => store.events.events)
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
  const dispatch = useAppDispatch()
  const classes = UserCanvasStyle()
  const themeToggleHandler = () => {
    dispatch(toggleTheme())
  }
  return (
    <>
      <ThemeToggle
        className={classes.themeToggle}
        isDarkTheme={isDarkTheme}
        themeToggleHandler={themeToggleHandler}
      />
      <EventTimeline events={events} />
    </>
  )
}

export default UserCanvas
