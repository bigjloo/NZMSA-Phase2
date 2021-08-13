import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

const LayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
      height: "100vh",
      maxWidth: "xs",
      padding: "0",
    },
  })
)

export default LayoutStyles