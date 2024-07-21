import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  showModalForTask$ = new BehaviorSubject<{
    showModal: boolean;
    taskId: string;
  }>({
    showModal: false,
    taskId: null,
  });

  showModal(taskId: string) {
    this.showModalForTask$.next({ showModal: true, taskId: taskId });
  }
  hideModal() {
    this.showModalForTask$.next({ showModal: false, taskId: null });
  }
}
