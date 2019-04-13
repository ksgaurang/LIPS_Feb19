import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITodo} from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoList() {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  addToDo(todo: ITodo) {
    return this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  updateToDo(todo: ITodo) {
    return this.http.put<ITodo>('https://jsonplaceholder.typicode.com/todos/' + todo.id, todo);
  }

  deleteToDo(todo: ITodo) {
    return this.http.delete<ITodo>('https://jsonplaceholder.typicode.com/todos/' + todo.id);
  }

}
