import EventTimeline from "./EventTimeline";
import { styled } from "@material-ui/core/styles";

const Canvas = () => {
  return (
    <>
      <h1>Canvas</h1>;
      <EventTimeline />
    </>
  );
};

const CanvasStyled = styled(Canvas)({
  maxWidth: "100%",
});

export default Canvas;
