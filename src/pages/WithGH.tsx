import React, { useEffect } from "react"
import { useLocation, Redirect } from "react-router-dom"
import { useMutation, useQuery } from "@apollo/client"
import { LoginWithGitHubCode } from "../hooks/api"
import {
  LOGIN_WITH_GITHUB_CODE,
  GET_USER_WITH_JWT,
} from "../apollo-client/query"
import { useAppDispatch } from "../hooks/storeHooks"
import { login } from "../store/authReducer"

const WithGH = () => {
  const search = useLocation().search
  const code = search.slice(6, search.length)
  const dispatch = useAppDispatch()

  const [getToken, { error, loading }] = useMutation(LOGIN_WITH_GITHUB_CODE, {
    variables: { code: code },
  })
  console.log(code)

  useEffect(() => {
    console.log("inside useEffect")
    async function loginWithGitHubOAuth() {
      const response = await getToken()
      if (error) return
      const JWT = response.data.login.jwt
      localStorage.setItem("HYD_JWT", JWT)
      console.log(JWT)
      dispatch(login())
      console.log("success login")
      return <Redirect to="/" />
    }
    loginWithGitHubOAuth()
  }, [getToken, dispatch, error])

  return <>{loading && <h1>Loading...</h1>}</>
}

export default WithGH
