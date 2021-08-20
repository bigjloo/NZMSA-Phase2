import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

const LayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: theme.palette.background.default,
      height: "100vh",
      maxWidth: "md",
      padding: "0",
      margin: "0",
    },
  })
)

export default LayoutStyles