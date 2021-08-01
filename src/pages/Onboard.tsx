import LoginDialog from "../components/Login/LoginDialog";
import { Link } from "react-router-dom";
import WithGH from "./WithGH";

const Onboard = () => {
  return (
    <>
      <h1>Onboard</h1>
      <h1>Test pipeline -- remove later</h1>
      <Link to="/signin/callback">asd </Link>
      <LoginDialog />
    </>
  );
};

export default Onboard;
