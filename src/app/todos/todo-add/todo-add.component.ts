import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ITodo } from '../service/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  pattern = '^[a-z A-Z0-9]+$';
  @Output() addToDo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() updatedToDo: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  @Input() todo: ITodo = {
    id : 0,
    userId: 0,
    title: '',
    completed: false
  };


  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.todo.id > 0 ? this.updatedToDo.emit(this.todo) :
    this.addToDo.emit(this.todo);
  }

}
