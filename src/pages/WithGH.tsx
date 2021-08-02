import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useMutation, useQuery } from "@apollo/client"
import { LoginWithGitHubCode } from "../hooks/api"
import { LOGIN_WITH_GITHUB_CODE } from "../apollo-client/query"

const WithGH = () => {
  const search = useLocation().search
  const code = search.slice(6, search.length)

  const [getToken] = useMutation(LOGIN_WITH_GITHUB_CODE, {
    variables: { code: code },
  })

  useEffect(() => {
    async function getTokenFromBackend() {
      const response = await getToken()
      console.log(response)
    }
    getTokenFromBackend()
  }, [getToken])

  return (
    <>
      <h1>GH LOGIN</h1>
      <LoginWithGitHubCode ghcode={code} />
    </>
  )
}

export default WithGH
