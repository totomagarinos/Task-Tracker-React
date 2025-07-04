import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import type { Task } from "../../models/task.model";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>X</button>
    </li>
  );
};

export default TaskItem;
