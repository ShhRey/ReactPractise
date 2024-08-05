import { useState } from "react"
import './styles.css'

// Function for Creating Todo List
export default function TodoList() {
    // Creating states for Storing Tasks provided by User
    const [newTask, setNewTask] = useState("");
    // Creating states for Storing User's Tasks in a List
    const [todo, setTodo] = useState([]);

    // Function to keep track of User Input
    const handleInput = (event) => {
        // Set newTask to the input provided by user
        setNewTask(event.target.value);
    }

    // Function for Adding Tasks to State
    const appendTask = () => {
        const task = {
            id: todo.length === 0 ? 1 : todo[todo.length-1].id + 1,
            taskName: newTask,
            completed: false
        }
        
        // Spread Operator
        setTodo([...todo, task]);
    }

    // Function for updating Task Status
    const updateStatus = (id) => {
        setTodo(todo.map((task) => {
            if (task.id === id) {
                return { ...task, completed: true }
            }
            return task;
        }));
    }

    // Function for Deleting Task by taskName
    const deleteTask = (id) => {
        // Filter and remove the task deleted by User
        setTodo(todo.filter((task) => task.id !== id));
    }    
        // Generic Filter Approach
        /* 
        const newTodo = todo.filter((task) => {
            if (task === taskName) {
                return false;
            }
            else {
                return true;
            }
        }); 
        */

    return (
        <div className="taskContainer">
            {/* Div for creating Input and Button Elements */}
            <h2>Todo List Implementation</h2>
            <div className="addTask">
                {/* Using onChange, keep track of every change in user input */}
                <input onChange={handleInput} type="text" />
                <button onClick={appendTask}>ADD TASK</button>
            </div>
            <div className="taskList">
                {/* Map through each element and Display entire List */}
                {todo.map((task) => {
                    return (
                        <div className="indTask" key={task.id} style={{backgroundColor: task.completed ? "green" : "transparent"}}>
                            <h2>{task.taskName}</h2>
                            {/* Creating function to update task status */}
                            <button onClick={() => updateStatus(task.id)}>COMPLETE</button>
                            {/* Creating function remove from List */}
                            <button onClick={() => deleteTask(task.id)}>X</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}