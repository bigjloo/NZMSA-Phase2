import { useEffect } from "react"

import Button from "@material-ui/core/Button"

import { useAppDispatch, useAppSelector } from "../hooks/storeHooks"
import { logout } from "../store/authReducer"
import EventDialog from "../components/Event/EventDialog"
import ShareDialog from "../components/Share/ShareDialog"
import Canvas from "../components/UI/Canvas"
import { useQuery } from "@apollo/client"
import { GET_USER_INFO_WITH_JWT } from "../apollo-client/query"

const User = () => {
  // Change query to retrieve day/event
  const { loading, data, error } = useQuery(GET_USER_INFO_WITH_JWT)

  const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    localStorage.removeItem("HYD_JWT")
  }

  useEffect(() => {
    console.log("inside useEffect")
    if (data) {
      console.log(data)
    }
  }, [data])

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Error...</h1>

  return (
    <>
      <h1>App page</h1>
      <Button onClick={logoutHandler}>Log Out</Button>
      <Canvas />
      <EventDialog />
      <ShareDialog />
    </>
  )
}

export default User
