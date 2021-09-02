import { useEffect } from "react"
import { useMutation } from "@apollo/client"
import { useAppDispatch } from "../../store/storeHooks"
import { login } from "../../store/authReducer"
import { GET_JWT_WITH_GITHUB_CODE } from "../../apollo-client/mutations"

// Fetches JWT Token from backend using
// code from Github and logins user
const useGithubCode = (code: string) => {
  const dispatch = useAppDispatch()
  const [getJWTToken, { error, loading }] = useMutation(
    GET_JWT_WITH_GITHUB_CODE,
    {
      variables: { code },
    }
  )

  useEffect(() => {
    const loginWithGitHubOAuth = async () => {
      const response = await getJWTToken()
      const jwtToken = response.data.login.jwt
      localStorage.setItem("HYD_JWT", jwtToken)
      dispatch(login())
    }
    loginWithGitHubOAuth()
  }, [getJWTToken, dispatch])

  return { loading, error }
}

export default useGithubCode
