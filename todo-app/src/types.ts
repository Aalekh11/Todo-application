// src/types.ts
export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export interface TodoState {
    tasks: Task[];
    newTaskText: string;
  }
  
  