// src/components/TodoApp.tsx
import React, { useReducer, useState } from 'react';
import { todoReducer, initialState} from '../reducer';
import TodoList from './TodoList';

const TodoApp: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTaskText, setNewTaskText] = useState<string>('');

  const addTask = () => {
    if (newTaskText.trim()) {
      dispatch({ type: 'ADD_TASK', payload: newTaskText });
      setNewTaskText('');
    }
  };

  const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.target.value);
  };

  const toggleTaskCompletion = (id: number) => {
    dispatch({ type: 'TOGGLE_TASK_COMPLETION', payload: id });
  };

  const deleteTask = (id: number) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const editTask = (id: number, newText: string) => {
    dispatch({ type: 'EDIT_TASK', payload: { id, newText } });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTaskText}
        onChange={handleNewTaskChange}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add Task</button>
      <TodoList
        tasks={state.tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default TodoApp;
