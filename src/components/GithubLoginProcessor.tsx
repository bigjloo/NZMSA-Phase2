import { useEffect } from "react"
import { useLocation, Redirect } from "react-router-dom"
import { useMutation } from "@apollo/client"

import { useAppSelector } from "../hooks/storeHooks"
import { useAppDispatch } from "../hooks/storeHooks"

import { login } from "../store/authReducer"
import { LOGIN_WITH_GITHUB_CODE } from "../apollo-client/query"

const GithubLoginProcessor = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)

  const search = useLocation().search
  const code = search.slice(6, search.length)

  const [getToken, { error, loading }] = useMutation(LOGIN_WITH_GITHUB_CODE, {
    variables: { code },
  })
  // 1) runs 4 times "inside github login process"
  // 2) inside UseEffect
  // 3) login success
  // 4) inside UseEffect
  console.log("inside github login process")
  console.log(error)
  console.log(loading)

  useEffect(() => {
    // ran once
    const loginWithGitHubOAuth = async () => {
      const response = await getToken()
      if (error) return
      const jwtToken = response.data.login.jwt
      localStorage.setItem("HYD_JWT", jwtToken)
      dispatch(login())
      console.log("login success")
    }
    loginWithGitHubOAuth()
  }, [getToken, dispatch, error])

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {isAuth && <Redirect to="/" />}
    </>
  )
}

export default GithubLoginProcessor
