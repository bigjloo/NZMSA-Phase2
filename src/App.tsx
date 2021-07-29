import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";

import BottomSticky from "./components/BottomSticky";
import EventDialog from "./components/EventDialog";
import ShareDialog from "./components/ShareDialog";
import Canvas from "./components/Canvas";

const ContainerWithBorders = styled(Container)({
  border: "1px solid red",
  height: "100vh",
  maxWidth: "xs",
});

function App() {
  return (
    <ContainerWithBorders maxWidth="xs">
      <h1>App page</h1>
      <Canvas />
      <EventDialog />
      <ShareDialog />
      <BottomSticky />
    </ContainerWithBorders>
  );
}

export default App;
