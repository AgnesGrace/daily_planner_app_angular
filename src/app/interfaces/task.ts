export interface Task {
  id: string;
  name: string;
  description: string;
  time?: number;
  date?: Date;
  taskState: 'new' | 'finished' | 'cancelled';
}
