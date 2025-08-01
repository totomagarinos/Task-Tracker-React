import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Task } from "../models/task.model";

interface TaskContextType {
  tasks: Task[];
  addTask: (taskText: string) => void;
  deleteTask: (taskId: number) => void;
  toggleTask: (taskId: number) => void;
  updateTask: (taskId: number, newText: string) => void;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  toggleTask: () => {},
  updateTask: () => {},
});

interface Params {
  children: ReactNode;
}

export const TaskProvider = ({ children }: Params) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText: string) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (taskId: number, newText: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
