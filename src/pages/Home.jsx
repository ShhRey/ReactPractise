import '../App.css';
import Accordian from "../components/accordian";
import ApiFetch from "../components/apiFetch";
import CounterApp from "../components/counter";
import { RandomColor } from "../components/random-color";
import TodoList from "../components/todo-list";
import { useContext } from 'react';
import { AppContext } from '../App';

export default function Home() {
	const { userName } = useContext(AppContext);

    return (
        <div className="App">
			<h1>This is Home Page and my UserName is: {userName}</h1>
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