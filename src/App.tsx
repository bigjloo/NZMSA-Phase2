import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import BottomSticky from "./components/BottomSticky";
import EventModal from "./components/EventModal";

const ContainerWithBorders = styled(Container)({
  border: "1px solid red",
  height: "100vh",
});

function App() {
  const openModal = () => {};

  return (
    <ContainerWithBorders maxWidth="xs">
      <h1>App page</h1>
      <EventModal />
      <BottomSticky openModal={openModal} />
    </ContainerWithBorders>
  );
}

export default App;
