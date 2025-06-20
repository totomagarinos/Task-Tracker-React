import React, { useState } from "react";

interface FormProps {
  onAddTask: (task: string) => void;
}

const TasksForm = ({ onAddTask }: FormProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input !== "") {
      onAddTask(input);
      setInput("");
    }

    console.log(input);
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

export default TasksForm;
