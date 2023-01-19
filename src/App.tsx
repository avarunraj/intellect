import "./App.css";
import { CircularProgressBar } from "./Components/CircularProgressBar/CircularProgressBar";
import { TriangleStatusBar } from "./Components/TriangleStatusBar/TriangleStatusBar";

function App() {
  return (
    <div className="App">
      <CircularProgressBar svgSize={200} progressCircleBarWidth={5} />
      <TriangleStatusBar widgetSize={220} />
    </div>
  );
}

export default App;
