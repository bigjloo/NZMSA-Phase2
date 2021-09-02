import { useLocation, Redirect } from "react-router-dom"
import { useAppSelector } from "../store/storeHooks"
import { useAppDispatch } from "../store/storeHooks"
import { openNotification } from "../store/notificationReducer"
import useGithubCode from "../utils/hooks/useGithubCode"
import BackdropContainer from "../components/Backdrop/BackdropContainer"

const GITHUB_CLIENT_ID = "b77f552e93db0e271256"
export const GITHUB_AUTHORIZE_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`

// Loaded after code is return from Github
// server after authorized by user
const GithubLoginProcessor = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)

  // Extract returned Github code from browser path URL
  const browserURL = useLocation().search
  const githubCode = browserURL.slice(6, browserURL.length) // browserURL: .../?code=<code>

  const { loading, error } = useGithubCode(githubCode)

  if (error) {
    dispatch(
      openNotification({
        message: "Error! Please try again",
        alertType: "error",
      })
    )
  }

  if (loading) return <BackdropContainer loading={loading} />

  return <>{isAuth && <Redirect to="/" />}</>
}

export default GithubLoginProcessor
