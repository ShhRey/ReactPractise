import '../App.css';
import Accordian from "../components/accordian";
import ApiFetch from "../components/apiFetch";
import CounterApp from "../components/counter";
import { RandomColor } from "../components/randomColor";
import TodoList from "../components/todoList";

export default function Home() {
	
    return (
        <div className="App">
			<h1>This is Home Page</h1>
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