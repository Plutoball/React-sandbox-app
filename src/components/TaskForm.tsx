// A task manager app where users can (CRUD) 1. add tasks, 2. mark tasks as completed, 3. delete tasks, and 4. Persist tasks using browser local storage.

//TaskForm.tsx is used to manage a text imput and creat new tasks

import React, { useState } from "react";
import './TaskForm.css'; // Importing CSS for styling the TaskForm component


// Interface is used to define the shape of a Task object
interface Task{
    id: number;
    title: string;
    completed: boolean;
};

interface TaskFormProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

function TaskForm({ tasks, setTasks }: TaskFormProps) {

    const [input, setInput] = useState("");

    const addTask = () => {
        if (!input.trim()) return;//This line prevents adding empty tasks
        const newTask = {
            id: Date.now(),
            title: input,
            completed: false
        };
        setTasks([...tasks,newTask]);
        setInput(""); //this line clears the input field after adding a task
    };

    return (
        <div className="task-form">
            <input
                type="text"
                className="task-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="task-button" onClick={addTask}>Add</button>
        </div>
    )
};

export default TaskForm;

//In pseudocode, this component would look like this:

// 1. Use import react to load react library. add useState Hook to manage component state.
// 2. Create a functional component named TaskForm that accepts tasks and setTasks as props.
// 3. Initialize a state variable input with an empty string using useState (=useState("")).
// 4. Define a function addTask that (handles task creation when button is clicked):
//    a. Checks if input is not empty (trimmed).
//    b. Creates a new task object with a unique id(Date.now() = current time), title from input, and completed set to false.
//    c. Updates tasks state by appending the new task to the existing tasks array(setTasks([...tasks, newTask]);).
//    d. Clears the input field by setting input to an empty string.
// 5. Return a JSX structure containing(rendering a form layout):
//    a. (Displays) An input field bound to input state(showing the current value of input)
//    b. Updates input with an onChange handler to update input state.
//    c. (Displays) A button that triggers addTask function when clicked.
// 6. Export TaskForm as the default export of the module.
