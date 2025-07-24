import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  const sortedTasks = tasks.sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
  });

  return (
    <ul className="list">
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
