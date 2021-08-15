import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },

    header: {
      padding: "1rem 2rem",
      borderBottom: "1px solid green",
      boxShadow: "0 0.2rem 1.5rem",
      color: "inherit",
    },

    githubName: {
      paddingLeft: "1.5rem",
    },

    logoutButton: {
      float: "right",
      // color: theme.palette.secondary.contrastText,
    },
  })
)

export default HeaderStyles