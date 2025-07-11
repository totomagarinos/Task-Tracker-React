import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <ul className="list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
