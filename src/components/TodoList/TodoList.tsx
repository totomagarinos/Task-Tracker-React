interface ListProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
}

const TodoList = ({ tasks, onDeleteTask }: ListProps) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input type="checkbox" />
          {task}
          <button onClick={() => onDeleteTask(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
