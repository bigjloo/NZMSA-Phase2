import { useEffect } from "react"
import { useLocation, Redirect } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { LOGIN_WITH_GITHUB_CODE } from "../apollo-client/query"

import { useAppSelector } from "../store/storeHooks"
import { useAppDispatch } from "../store/storeHooks"
import { login } from "../store/authReducer"

import BackdropContainer from "../components/UI/BackdropContainer"

// import uploadFileToBlob, {
//   blobToFile,
//   azureBlobURL,
// } from "./azure-storage-blob"

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

  useEffect(() => {
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

// export const useUploadToAzure = () => {
//   const cardImage = useAppSelector((state) => state.camera.cardImage)
//   const githubName = useAppSelector((state) => state.user.githubName)
//   const token = useAppSelector((state) => state.user.sasToken)

//   const fileName = new Date().toISOString()
//   const file = blobToFile(cardImage!, fileName)

//   // Use name of newly created file for fileURL
//   // const fileURL = `${azureBlobURL}/${githubName}/${file.name}`

//   const azureUpload = async (file: File, token: string, containerName: string) => {
//     const fileURL = await uploadFileToBlob(file!, token!, containerName!)
//     return fileURL
//   }

//   // try {
//   //   // Uploads to Azure Storage Blob

//   //   return fileURL
//   // } catch (err) {
//   //   console.error(err)
//   // }
//   return azureUpload
// }
