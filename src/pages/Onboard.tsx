import LoginDialogContainer from "../components/Login/LoginDialogContainer"
import CameraContainer from "../components/MediaCapture/CameraContainer"

// Short tutorial or onboarding user front page
const Onboard = () => {
  return (
    <>
      <h1>Onboard</h1>
      <CameraContainer />
      <LoginDialogContainer />
    </>
  )
}

export default Onboard
