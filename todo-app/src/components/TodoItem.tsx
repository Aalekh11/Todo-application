// src/components/TodoItem.tsx
import React, { useState } from 'react';
import { Task } from '../types';

interface TodoItemProps {
  task: Task;
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(task.text);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleEditSave = () => {
    editTask(task.id, editText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input type="text" value={editText} onChange={handleEditChange} />
          <button onClick={handleEditSave}>Save</button>
        </div>
      ) : (
        <div>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
