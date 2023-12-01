import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  allTasks: Task[] = [];
  charge: boolean = false;

  constructor() {}

  insertTasks(task: string) {
    if (task !== undefined && task !== '') {
      const uniq = new Date().getTime();
      const tempTask: Task = { id: uniq, AllTask: task, completed: false };
      this.allTasks.push(tempTask);
      console.log(this.allTasks);
    }
  }

  chargeDatas() {
    this.charge = true;
    setTimeout(() => {
      this.charge = false;
    }, 1000);
  }

  getCharge() {
    return this.charge;
  }

  getTasks() {
    return this.allTasks;
  }

  modifyTask(id: number, newModify: string) {
    this.allTasks.forEach((task) => {
      if (task.id === id) {
        task.AllTask = newModify;
      }
    });
  }

  removeTask(id: number) {
    this.allTasks.forEach((task, i: number) => {
      if (task.id === id) {
        this.allTasks.splice(i, 1);
      }
    });
    console.log(this.allTasks);
  }

  taskDone(id: number) {
    this.allTasks.forEach((task, i: number) => {
      if (task.id === id) {
        this.allTasks[i].completed = true;
      }
    });
    console.log(this.allTasks);
  }

  incompleteTask(id: number) {
    this.allTasks.forEach((task, i: number) => {
      if (task.id === id) {
        this.allTasks[i].completed = false;
      }
    });
    console.log(this.allTasks);
  }
}
