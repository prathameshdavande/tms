import { Component, ViewChild } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/task';
import { CommonService } from '../../services/common/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  @ViewChild('taskForm') taskForm: NgForm;
  display: boolean = false;
  taskId: string = null;

  constructor(
    private taskService: TaskService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.commonService.showModalForTask$.subscribe((value) => {
      console.log('Subscriber called, ', value);
      this.display = value.showModal;
      this.taskId = value.taskId;

      if (this.taskId) {
        const task: Task = this.taskService.getTask(this.taskId);
        console.log('task : ', task);
        this.taskForm.setValue({
          title: task.title,
          description: task.description,
          priority: task.priority,
          dueDate: task.dueDate,
        });
      }
    });
  }

  showDialog() {
    this.taskForm.reset();
    this.taskId = null;
    this.display = true;
  }

  onSubmit(taskForm) {
    console.log(taskForm.value);
    const { title, priority, dueDate, description } = taskForm.value;
    const newTask: Task = {
      id: Date.now().toString(),
      description: description,
      employeeName: 'dummy',
      title: title,
      status: 'pending',
      priority: priority,
      dueDate: dueDate,
    };
    this.taskService.addTask(newTask);
    this.display = false;
    taskForm.form.reset();
  }
}
