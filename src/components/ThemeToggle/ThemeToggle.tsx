import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import Grid from "@material-ui/core/Grid"

import { useAppDispatch } from "../../store/storeHooks"
import { toggleTheme } from "../../store/themeReducer"

// Credits to https://www.kindacode.com/article/react-material-ui-create-dark-light-theme-toggle/

export type ThemeToggleProps = {
  isDark: boolean
}

const ThemeToggle = ({ isDark }: ThemeToggleProps) => {
  const dispatch = useAppDispatch()
  const switchHandler = () => dispatch(toggleTheme())

  return (
    <Grid container direction="row" justifyContent="flex-end" xs={12}>
      <Grid item>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={isDark} onChange={switchHandler} />}
            label="Dark"
          />
        </FormGroup>
      </Grid>
    </Grid>
  )
}

export default ThemeToggle
