// import React, { useEffect } from "react"
// import { useMutation, useQuery } from "@apollo/client"
// import { CONFIGURATION } from "../apollo-client/apollo"
// import { LOGIN_WITH_GITHUB_CODE } from "../apollo-client/query"

// export const AddUser = () => {
//   const [addUser, { data }] = useMutation(ADD_DAY)

//   const add_user = async () => {
//     const response = await addUser({
//       variables: {
//         USERID: 4,
//       },
//     })
//     if (response.errors) return <h1>error</h1>

//     if (response.data) console.log(data)
//   }

//   return <button onClick={add_user}>add user</button>
// }

// export const LoginWithGitHubCode = ({ ghcode }: { ghcode: string }) => {
//   const [getToken, { data, loading, error }] = useMutation(
//     LOGIN_WITH_GITHUB_CODE,
//     {
//       variables: { code: ghcode },
//     }
//   )

//   async function submitToken() {
//     const response = await getToken()
//     console.log(response)
//     if (response.errors) {
//       console.log(error)
//     }
//   }

//   async function fetchUsers() {}

//   if (loading) return <p>Loading...</p>

//   if (error) return <p>Error:</p>

//   if (data) console.log(data)

//   return (
//     <>
//       <h1>Login w Github</h1>
//       <button onClick={submitToken} type="button">
//         get token
//       </button>
//       <button onClick={fetchUsers} type="button">
//         fetch users
//       </button>
//     </>
//   )
// }

export {}
