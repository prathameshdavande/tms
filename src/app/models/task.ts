export interface Task {
  id: string;
  employeeName: string;
  description: string;
  title: string;
  status: string;
  priority: string;
  dueDate?: Date;
}
