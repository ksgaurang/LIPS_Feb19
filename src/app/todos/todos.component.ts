import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './service/todo.service';
import { ITodo } from './service/todo';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  listScubscription: Subscription;

  list: ITodo[] = [];
  task: ITodo = {
    id : 0,
    userId : 0,
    title : '',
    completed : false
  };

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadTask();
  }

  loadTask() {
   // this.listScubscription =  this.todoService.getTodoList().subscribe((data) => this.list = data);

   this.route.data.subscribe((result) => {
     this.list = result['todoList'];
   });

  }

  addToDo(todo: ITodo) {

    this.todoService.addToDo(todo).subscribe((data) => {
      this.loadTask();
      console.log('Task Added');
      console.log(data);
    }, (err) => console.log(err));
  }

  currentTask(task: ITodo) {
    this.task = task;
  }

  updateTask(task: ITodo) {
    this.todoService.updateToDo(task).subscribe((data) => this.loadTask(), (err) => console.log(err));
  }

  deleteTask(task: ITodo) {
    this.todoService.updateToDo(task).subscribe((data) => this.loadTask(), (err) => console.log(err));
  }

  ngOnDestroy() {
    // this.listScubscription ? this.listScubscription.unsubscribe() : this.noop();   // comment for resolve guard, no need to use
  }

  noop() {}


}
