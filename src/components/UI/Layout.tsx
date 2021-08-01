import { ReactNode } from "react";
import BottomSticky from "./BottomSticky";

import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";

type LayoutProps = {
  children: ReactNode;
};

const ContainerWithBorders = styled(Container)({
  border: "1px solid red",
  height: "100vh",
  maxWidth: "xs",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <ContainerWithBorders>
      <main>{children}</main>
      <BottomSticky />
    </ContainerWithBorders>
  );
};

export default Layout;
