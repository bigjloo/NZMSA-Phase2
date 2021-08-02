import React from "react"
import { useLocation } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { AddUser, LoginWithGitHubCode } from "../hooks/api"

const WithGH = () => {
  const search = useLocation().search
  const code = search.slice(6, search.length)

  return (
    <>
      <h1>GH LOGIN</h1>
      <AddUser />
      <LoginWithGitHubCode ghcode={code} />
    </>
  )
}

export default WithGH
