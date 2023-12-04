import { CircularProgressBar } from "./Components/CircularProgressBar";
import { TriangleStatusBar } from "./Components/TriangleStatusBar";

function App() {
  return (
    <>
      <CircularProgressBar svgSize={200} progressCircleBarWidth={5} />
      <TriangleStatusBar widgetSize={200} />
    </>
  );
}

export default App;
