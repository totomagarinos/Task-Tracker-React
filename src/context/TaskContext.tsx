import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Task } from "../models/task.model";

interface TaskContextType {
  tasks: Task[];
  addTask: (taskText: string) => void;
  deleteTask: (taskId: number) => void;
  toggleTask: (taskId: number) => void;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  toggleTask: () => {},
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

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};
