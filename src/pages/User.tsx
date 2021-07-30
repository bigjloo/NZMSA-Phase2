import EventDialog from "../components/Event/EventDialog";
import ShareDialog from "../components/Share/ShareDialog";
import Canvas from "../components/UI/Canvas";

const User = () => {
  return (
    <>
      <h1>App page</h1>
      <Canvas />
      <EventDialog />
      <ShareDialog />
    </>
  );
};

export default User;
