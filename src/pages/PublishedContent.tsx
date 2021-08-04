import { useEffect } from "react"
import { useParams } from "react-router"

const PublishContent = () => {
  const params = useParams()
  console.log(params)

  // when component is loaded, fetch day from database according to params.publishKey
  // render to screen
  useEffect(() => {}, [])

  return <h1>Published Content</h1>
}

export default PublishContent
