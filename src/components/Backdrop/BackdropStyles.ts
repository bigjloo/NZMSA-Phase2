import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const BackdropStyles = makeStyles((theme: Theme) => createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer - 1,
      opacity: 0.3,
    },
}))

export default BackdropStyles