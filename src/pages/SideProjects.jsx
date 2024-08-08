import Accordian from "../components/accordian";
import ApiFetch from "../components/apiFetch";
import CounterApp from "../components/counter";
import { RandomColor } from "../components/randomColor";
import TodoList from "../components/todoList";
import QRCodeGenerator from '../components/qrCode';
import WeatherApp from "../components/weatherApp";


export default function SideProjects() {
    return (
        <div className="">
            <h2>Here's a list of Small Projects that depict my journey from React</h2>
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
            {/* Importing QR Generator Component */}
            <QRCodeGenerator />
            {/* Importing Weather App Component */}
            <WeatherApp />
        </div>
    )
}