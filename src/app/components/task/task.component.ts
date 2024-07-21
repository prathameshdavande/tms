import { Component } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/task';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  tasks: Task[];
  role = null;
  isEmployee = false;
  constructor(
    private taskService: TaskService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.role = sessionStorage.getItem('role');
    if (this.role == 'Manager') {
      this.isEmployee = false;
    } else {
      this.isEmployee = true;
    }
  }

  onEditClick(taskId: string) {
    this.commonService.showModal(taskId);
  }
}
