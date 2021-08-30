import { useEffect } from "react"
import { useLocation, Redirect } from "react-router-dom"

import { useMutation } from "@apollo/client"
import { GET_JWT_WITH_GITHUB_CODE } from "../apollo-client/mutations"

import { useAppSelector } from "../store/storeHooks"
import { useAppDispatch } from "../store/storeHooks"
import { login } from "../store/authReducer"
import { openNotification } from "../store/notificationReducer"

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
  const code = browserURL.slice(6, browserURL.length) // URL: ../?code=<code>

  const { loading, error } = useGithubCode(code)

  if (error) {
    dispatch(
      openNotification({
        message: "Error! Please try again",
        alertType: "error",
      })
    )
  }

  return (
    <>
      {loading && <BackdropContainer loading={loading} />}
      {isAuth && <Redirect to="/" />}
    </>
  )
}

// Fetches JWT Token from backend using code
// from Github and logins
const useGithubCode = (code: string) => {
  const dispatch = useAppDispatch()
  const [getToken, { error, loading }] = useMutation(GET_JWT_WITH_GITHUB_CODE, {
    variables: { code },
  })

  useEffect(() => {
    const loginWithGitHubOAuth = async () => {
      const response = await getToken()
      const jwtToken = response.data.login.jwt
      localStorage.setItem("HYD_JWT", jwtToken)
      dispatch(login())
    }
    loginWithGitHubOAuth()
  }, [getToken, dispatch])

  return { loading, error }
}

export default GithubLoginProcessor
