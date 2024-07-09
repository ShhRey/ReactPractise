import '../App.css';
import Accordian from "../components/accordian";
import ApiFetch from "../components/apiFetch";
import CounterApp from "../components/counter";
import { RandomColor } from "../components/random-color";
import TodoList from "../components/todo-list";


export default function Home() {
    return (
        <div className="App">
			{/* Importing Accordian Component */}
			<Accordian />
			{/* Importing RCG Component */}
			<RandomColor />
			{/* Importing CounterApp Component */}
			<CounterApp />
			{/* Importing Todo List Component */}
			<TodoList />
			{/* Importing Fetch API Component */}
			<ApiFetch />
		</div>
    )
}