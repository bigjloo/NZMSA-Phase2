import { useEffect } from "react"
import { useLocation, Redirect } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { GET_JWT_WITH_GITHUB_CODE } from "../apollo-client/mutations"

import { useAppSelector } from "../store/storeHooks"
import { useAppDispatch } from "../store/storeHooks"
import { login } from "../store/authReducer"
import { openNotification } from "../store/notificationReducer"

import BackdropContainer from "../components/Backdrop/BackdropContainer"

// Loaded after code is return from Github
// server after authorized by user
export const GithubLoginProcessor = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)

  // Gets code from browser URL
  const search = useLocation().search
  const code = search.slice(6, search.length) // URL: ../?code=<code>

  // Gets JWT Token from backend with code from Github
  const [getToken, { error, loading }] = useMutation(GET_JWT_WITH_GITHUB_CODE, {
    variables: { code },
  })

  useEffect(() => {
    const loginWithGitHubOAuth = async () => {
      // Gets JWT Token from backend
      const response = await getToken()

      // Save token in localStorage and login user
      const jwtToken = response.data.login.jwt
      localStorage.setItem("HYD_JWT", jwtToken)
      dispatch(login())
    }
    loginWithGitHubOAuth()
  }, [getToken, dispatch, error])

  if (error) {
    dispatch(
      openNotification({
        message: "Error! Please try again",
        alertType: "error",
      })
    )
  }

  if (loading) return <BackdropContainer loading={loading} />

  return (
    <>
      {loading && <BackdropContainer loading={loading} />}
      {isAuth && <Redirect to="/" />}
    </>
  )
}
