
import './App.css';
import { CircularProgressBar } from './Components/CircularProgressBar/CircularProgressBar';

function App() {
  return (
    <div className="App">
      <CircularProgressBar svgSize={200} progressCircleBarWidth={5}/>
    </div>
  );
}

export default App;
