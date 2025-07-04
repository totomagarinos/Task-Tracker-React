import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <TaskForm />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
