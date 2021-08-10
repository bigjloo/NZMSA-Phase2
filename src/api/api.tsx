import { useEffect } from "react"
import { useLocation, Redirect } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { LOGIN_WITH_GITHUB_CODE } from "../apollo-client/query"

import { useAppSelector } from "../store/storeHooks"
import { useAppDispatch } from "../store/storeHooks"
import { login } from "../store/authReducer"

import BackdropContainer from "../components/UI/BackdropContainer"

// Called after OAuth code is return from Github server after
// authorized by User
export const GithubLoginProcessor = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)

  // Gets code from browser URL
  const search = useLocation().search
  const code = search.slice(6, search.length) // URL: ../?code=<code>

  // Gets JWT Token from backend with code from Github
  const [getToken, { error, loading }] = useMutation(LOGIN_WITH_GITHUB_CODE, {
    variables: { code },
  })

  // console.log("inside github login process")
  // console.log(error)
  // console.log(loading)
  // console.log(isAuth)

  // 1st time error ==  undefined, loading == false
  // 2nd time loading == true, error == undefined
  // 3rd time error ==  undefined, loading == false // data got back ??
  // 4th time error ==  undefined, loading == false // isAuth == true ??
  // renders User.tsx
  // console log success here? useEffect in GHLoginProcessor only runs once
  // data in User.tsx is returned, rerenders User.tsx. once when promise, another when isAuth = true

  useEffect(() => {
    // ran once
    const loginWithGitHubOAuth = async () => {
      // Gets JWT Token from backend
      const response = await getToken()

      if (error) return

      // Save token in localStorage
      const jwtToken = response.data.login.jwt
      localStorage.setItem("HYD_JWT", jwtToken)

      // Logs in user
      dispatch(login())
    }
    loginWithGitHubOAuth()
  }, [getToken, dispatch, error])

  return (
    <>
      {loading && <BackdropContainer loading={loading} />}
      {isAuth && <Redirect to="/" />}
    </>
  )
}
