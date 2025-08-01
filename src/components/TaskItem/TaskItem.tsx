import React, { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import type { Task } from "../../models/task.model";
import "./TaskItem.css";
import { Modal } from "../Portal";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const { toggleTask, deleteTask, updateTask } = useContext(TaskContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim() !== "") {
      updateTask(task.id, input);
      setIsModalOpen(false);
    }
  };

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
        className="edit-button"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Edit
      </button>
      <button
        className="material-symbols-outlined delete-button"
        onClick={() => deleteTask(task.id)}
      >
        delete
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <form className="update-form">
            <h2>Update Task</h2>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              defaultValue={task.text}
            />
            <button onClick={handleSubmit}>Save</button>
          </form>
        </Modal>
      )}
    </li>
  );
};

export default TaskItem;
