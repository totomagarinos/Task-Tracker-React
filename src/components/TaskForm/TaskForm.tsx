import React, { useContext, useState } from "react";
import "./TaskForm.css";
import { TaskContext } from "../../context/TaskContext";

const TaskForm = () => {
  const [input, setInput] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim() !== "") {
      addTask(input);
      setInput("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form-title">Task Tracker</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          placeholder="Enter your task here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TaskForm;
