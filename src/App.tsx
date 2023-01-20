import "./App.css";
import { CircularProgressBar } from "./Components/CircularProgressBar";
import { TriangleStatusBar } from "./Components/TriangleStatusBar";

function App() {
  return (
    <div className="App">
      <CircularProgressBar svgSize={200} progressCircleBarWidth={5} />
      <TriangleStatusBar widgetSize={200} />
    </div>
  );
}

export default App;
