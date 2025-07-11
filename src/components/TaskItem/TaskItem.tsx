import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import type { Task } from "../../models/task.model";
import "./TaskItem.css";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <li className={task.completed ? "item completed" : "item"}>
      <input
        className="checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
      <button
        className="material-symbols-outlined"
        onClick={() => deleteTask(task.id)}
      >
        delete
      </button>
    </li>
  );
};

export default TaskItem;
