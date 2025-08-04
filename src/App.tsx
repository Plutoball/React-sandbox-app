import React, { use } from 'react';
import { useState } from 'react';
// Importing React and useState hook to manage component state
import logo from './logo.svg';
import './App.css';
import './components/Card.css';
import './components/TaskForm.css';
import Card from './components/Card';
import TaskItem from './components/TaskItem';
import TaskForm from './components/TaskForm';
import { Task } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  // This line initializes the tasks state as an empty array of Task objects.
  // The Task type is defined in TaskItem.tsx and TaskForm.tsx, which includes id, title, and completed properties.


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>Welcome to My App</h1>
        <p>This is a simple React sandbox.</p>
        <Card
        // Creating a sample card component with a button-using properties from Card.tsx
        title = "Card title"
        description = "This is a card description."
        onButtonClick = {() => alert('Button clicked!')}
        />

        {/* Rendering TaskForm component to add new tasks */}
        <section className="task-form-section">
          <h2>Add a New Task</h2>
          {/* Passing tasks and setTasks as props to TaskForm */}
          {/* This allows TaskForm to manage the task creation process */}
          {/* and update the tasks state in App component */}
          <TaskForm tasks={tasks} setTasks={setTasks} />
          <div className="task-list">
            {tasks.map(task => (
              // Rendering TaskItem components for each task in the tasks array
              <TaskItem 
                key={task.id} 
                task={task} 
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
