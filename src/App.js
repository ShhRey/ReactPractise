import './App.css';
import Accordian from './components/accordian';
import { RandomColor } from './components/random-color';
import CounterApp from './components/counter';
import TodoList from './components/todo-list';
import ApiFetch from './components/apiFetch';

function App() {
  return (
    <div className="App">
      {/* Importing Accordian Component */}
      <Accordian/>
      {/* Importing RCG Component */}
      <RandomColor/>
      {/* Importing CounterApp Component */}
      <CounterApp />
      {/* Importing Todo List Component */}
      <TodoList />
      {/* Importing Fetch API Component */}
      <ApiFetch />
    </div>
  );
}

export default App;