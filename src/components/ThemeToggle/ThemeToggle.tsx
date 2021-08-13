import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import Grid from "@material-ui/core/Grid"

// Credits to https://www.kindacode.com/article/react-material-ui-create-dark-light-theme-toggle/

type ThemeToggleProps = {
  className: string
  isDarkTheme: boolean
  themeToggleHandler: () => void
}

const ThemeToggle = (props: ThemeToggleProps) => {
  const { className, isDarkTheme, themeToggleHandler } = props

  return (
    <Grid container direction="row" justifyContent="flex-end" xs={12}>
      <Grid item>
        <FormGroup className={className}>
          <FormControlLabel
            control={
              <Switch checked={isDarkTheme} onChange={themeToggleHandler} />
            }
            label="Dark"
          />
        </FormGroup>
      </Grid>
    </Grid>
  )
}

export default ThemeToggle
