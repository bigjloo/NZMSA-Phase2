import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },

    header: {
      width:"100%",
      padding: "1rem 2rem",
      boxShadow: "0 0.2rem 1.5rem",
    },

    githubName: {
      paddingLeft: "1.5rem",
    },

    logoutButton: {
      float: "right",
      color: theme.palette.secondary.main,
    },
  })
)

export default HeaderStyles