import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { LoginWithGitHubCode } from "../hooks/api"
import { LOGIN_WITH_GITHUB_CODE } from "../apollo-client/query"

const WithGH = () => {
  const search = useLocation().search
  const code = search.slice(6, search.length)

  const [getToken] = useMutation(LOGIN_WITH_GITHUB_CODE, {
    variables: { code: code },
  })
  console.log(code)

  useEffect(() => {
    console.log("inside useEffect")
    async function loginWithGitHubOAuth() {
      const response = await getToken()
      console.log(response)
    }
    loginWithGitHubOAuth()
  }, [getToken])

  return (
    <>
      <h1>GH LOGIN</h1>
    </>
  )
}

export default WithGH
