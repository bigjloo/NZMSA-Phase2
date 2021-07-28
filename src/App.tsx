import { useDispatch } from "react-redux";
import { toggleDialog } from "./store/dialogReducer";

import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";

import BottomSticky from "./components/BottomSticky";
import EventDialog from "./components/EventDialog";

const ContainerWithBorders = styled(Container)({
  border: "1px solid red",
  height: "100vh",
});

function App() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleDialog());
  };

  return (
    <ContainerWithBorders maxWidth="xs">
      <h1>App page</h1>
      <EventDialog />
      <BottomSticky openModal={openModal} />
    </ContainerWithBorders>
  );
}

export default App;
