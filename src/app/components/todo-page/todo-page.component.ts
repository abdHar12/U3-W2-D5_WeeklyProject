import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  allTasks: Task[] = [];
  task!: string;
  charge!: boolean;
  presenceIncompletedTask!: boolean;

  constructor(private taskSrv: TaskService) {
    this.getTasks();
    this.verifyIncompletedTask();
    this.taskSrv.chargeDatas();
  }

  ngOnInit(): void {}

  getCharge() {
    return this.taskSrv.getCharge();
  }

  getTasks() {
    this.allTasks = this.taskSrv.getTasks();
  }

  insertTask() {
    this.taskSrv.insertTasks(this.task);
    this.task = '';
  }

  verifyIncompletedTask() {
    let count: number = 0;
    this.taskSrv.chargeDatas();
    console.log('lung', this.allTasks.length);
    if (this.allTasks.length > 0) {
      this.allTasks.forEach((task) => {
        if (!task.completed) count++;
      });
      if (!(count > 0)) this.presenceIncompletedTask = false;
      else this.presenceIncompletedTask = true;
    } else {
      this.presenceIncompletedTask = false;
    }
  }

  removeTask(id: number) {
    this.taskSrv.removeTask(id);
    this.getCharge();
  }
  taskDone(id: number) {
    this.taskSrv.taskDone(id);
  }
}
