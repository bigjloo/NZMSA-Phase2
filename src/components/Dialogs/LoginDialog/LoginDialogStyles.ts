import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

const LoginDialogStyles = makeStyles((theme: Theme) => createStyles({
    loginButton: {
        color: theme.palette.secondary.main
    }
}))

export default LoginDialogStyles