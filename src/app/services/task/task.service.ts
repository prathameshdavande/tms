import { Injectable } from '@angular/core';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  DUMMY_TASKS: Task[] = [
    {
      id: '1',
      employeeName: 'Prathamesh',
      description: 'Dummy description',
      title: 'Create header',
      status: 'pending',
      priority: '',
      dueDate: new Date(),
    },
    {
      id: '2',
      employeeName: 'Vyankatesh',
      description: 'Dummy description',
      title: 'Create footer',
      status: 'backlog',
      priority: '',
      dueDate: new Date(),
    },
    {
      id: '2',
      employeeName: 'Vivek',
      description: 'Dummy description',
      title: 'Create main pages',
      status: 'pending',
      priority: '',
      dueDate: new Date(),
    },
  ];

  constructor() {}

  getTasks(): Task[] {
    return this.DUMMY_TASKS;
  }

  getTask(id: string) {
    return this.DUMMY_TASKS.find((task) => task.id === id);
  }

  addTask(task: Task) {
    this.DUMMY_TASKS.push(task);
  }
}
