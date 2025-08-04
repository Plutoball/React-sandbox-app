// A task manager app where users can (CRUD) 1. add tasks, 2. mark tasks as completed, 3. delete tasks, and 4. Persist tasks using browser local storage.

// TaskItem.tsx is used to manage a single task item in the task manager app.

import React from 'react';
import './TaskItem.css'; // Importing CSS for styling the TaskItem component

// interface is used to define the shape of a Task object
interface Task{
    id: number;
    title: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, tasks, setTasks }) =>{
    const toggleCompletion = () => {
        setTasks(
            tasks.map(t => 
                t.id === task.id ? { ...t, completed: !t.completed } : t
            )
        ); // This (tasks.map) line toggles the completion status of the task
    };

const deleteTask = () => {
    setTasks(tasks.filter(t => t.id !== task.id));
};// This line filters out the task to be deleted from the tasks array

return (
    <div className="task-item">
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</span>

        <button className={`toggle-task-button ${task.completed ? "undo-task-button" : "complete-task-button"}`} onClick={toggleCompletion}>
            {task.completed ? "Undo" : "Complete"}
        </button> {/* This button toggles the completion status of the task */}

        <button className="delete-task-button" onClick={deleteTask}>Delete</button>
    </div>
);
};

export default TaskItem;

//In pseudocode, this component would look like this:
// 1. Define a shape (TypeScript interface) for Task with id, title, and completed properties.
// 2. Define a  a receiver (TaskItemProps interface) that includes task, tasks, and setTasks as props.
// 3. Create a functional component TaskItem that accepts (or extracts) TaskItemProps as props.
// 4. Define a function toggleCompletion that toggles the completion status of the task:
//  (i.e. if task is completed, it sets completed to false, otherwise true).
//    a. Uses setTasks to update the tasks state by mapping through tasks.
//    b. For each task, if the id matches the current task's id, it toggles the completed status.
// 5. Define a function deleteTask that removes the task from the tasks array:
//  (i.e. filters out the task with the matching id).
//    a. Uses setTasks to update the tasks state by filtering out the task to be deleted.
// 6. Return a JSX structure that renders:
//    a. A div that conditionally applies a text decoration style based on task completion status.
//    b. A span displaying the task title.
//    c. A button that toggles the task completion status when clicked(if done say "Undo", otherwise say "Complete").
//    d. A button that deletes the task when clicked.
// 7. Export TaskItem as the default export of the module.

