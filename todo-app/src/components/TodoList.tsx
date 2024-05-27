// src/components/TodoList.tsx
import React from 'react';
import { Task } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;  // clicking on the task mark as complete
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTaskCompletion, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
