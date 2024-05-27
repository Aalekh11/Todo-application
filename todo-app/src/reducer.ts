// src/reducer.ts
import { Task } from './types';

export interface AddTaskAction {
  type: 'ADD_TASK';
  payload: string;
}

export interface ToggleTaskCompletionAction {
  type: 'TOGGLE_TASK_COMPLETION';
  payload: number;
}

export interface DeleteTaskAction {
  type: 'DELETE_TASK';
  payload: number;
}

export interface EditTaskAction {
  type: 'EDIT_TASK';
  payload: { id: number; newText: string };
}

export type Action =
  | AddTaskAction
  | ToggleTaskCompletionAction
  | DeleteTaskAction
  | EditTaskAction;

export interface TodoState {
  tasks: Task[];
}

export const initialState: TodoState = {
  tasks: [],
};

export const todoReducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask: Task = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return { ...state, tasks: [...state.tasks, newTask] };

    case 'TOGGLE_TASK_COMPLETION':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
        ),
      };

    default:
      return state;
  }
};
