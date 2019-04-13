import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../service/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Output() removeTask: EventEmitter<ITodo> =  new EventEmitter<ITodo>();
  @Output() selectedTask: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Input() todoList: Array<ITodo> = [];
 // @Output() todoObject: ITodo;

  constructor() { }

  ngOnInit() {
  }

  editTask(task: ITodo) {
    this.selectedTask.emit(task);
  }

  deleteTask(task: ITodo) {
    this.removeTask.emit(task);
  }

}
