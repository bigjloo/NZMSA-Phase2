import { useAppSelector } from "../../hooks/storeHooks";
import BottomSticky from "./BottomSticky";

const Layout = () => {
  const isAuth = useAppSelector((store) => store.auth.isAuth);
  const bottomNav = isAuth ? <BottomSticky /> : <BottomSticky />;

  return { bottomNav };
};

export default Layout;
