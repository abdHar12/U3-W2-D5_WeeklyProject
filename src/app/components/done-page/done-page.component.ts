import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/model/task';
@Component({
  selector: 'app-done-page',
  templateUrl: './done-page.component.html',
  styleUrls: ['./done-page.component.scss'],
})
export class DonePageComponent implements OnInit {
  allTasks: Task[] = [];
  task!: string;
  charge!: boolean;

  constructor(private taskSrv: TaskService) {
    this.taskSrv.chargeDatas();
    this.getTasks();
  }

  getCharge() {
    return this.taskSrv.getCharge();
  }
  getTasks() {
    this.allTasks = this.taskSrv.getTasks();
  }
  removeTask(id: number) {
    this.taskSrv.removeTask(id);
  }
  incompleteTask(id: number) {
    this.taskSrv.incompleteTask(id);
  }
  ngOnInit(): void {}
}
