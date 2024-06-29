import './App.css';
import Accordian from './components/accordian';
import { RandomColor } from './components/random-color';
import CounterApp from './components/counter';

function App() {
  return (
    <div className="App">
      {/* Importing Accordian Component */}
      <Accordian/>
      {/* Importing RCG Component */}
      <RandomColor/>
      {/* Importing CounterApp Component */}
      <CounterApp />
    </div>
  );
}

export default App;