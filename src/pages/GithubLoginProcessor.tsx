import { useEffect } from "react"
import { useLocation, Redirect } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { LOGIN_WITH_GITHUB_CODE } from "../apollo-client/query"
import { useAppDispatch } from "../hooks/storeHooks"
import { login } from "../store/authReducer"
import { useAppSelector } from "../hooks/storeHooks"

// 1) Gets Github authorization code from URL
// 2) Makes a mutation query to backend server to get JWT token
// 3) stores the token and sets isAuth
// 4) redirects to hoempage page
const GithubLoginProcessor = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)

  const search = useLocation().search
  const code = search.slice(6, search.length)

  const [getToken, { error, loading }] = useMutation(LOGIN_WITH_GITHUB_CODE, {
    variables: { code },
  })
  console.log(code)

  useEffect(() => {
    async function loginWithGitHubOAuth() {
      const response = await getToken()
      if (error) return
      const jwtToken = response.data.login.jwt
      localStorage.setItem("HYD_JWT", jwtToken)
      dispatch(login())
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
