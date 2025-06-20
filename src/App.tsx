import { useState } from "react";
import "./App.css";
import TasksForm from "./components/TasksForm/TasksForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <TasksForm onAddTask={addTask} />
      <TodoList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
