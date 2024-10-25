export interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export interface TodoStoreSummary {
  all: number;
  completed: number;
  notCompleted: number;
}