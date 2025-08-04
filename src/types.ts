// src/types.ts
// This file defines the types used in the Task Manager application.

//Task interface defines the structure of a task object.
// It includes an id, title, and a boolean to indicate if the task is completed.
export interface Task {
  id: number;
  title: string;
  completed: boolean;
};
// TaskFormProps defines the properties expected by the TaskForm component.
// It includes a function to handle adding a new task.
export interface TaskFormProps {
  onAddTask: (task: Task) => void;
};