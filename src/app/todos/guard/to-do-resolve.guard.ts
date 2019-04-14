import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from '../service/todo';
import { TodoService } from '../service/todo.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoResolveGuard implements Resolve<ITodo[]> {
  constructor(private todoService: TodoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo[]> {
    return this.todoService.getTodoList();   // it does not require subscribe method. Internally it uses subscribe method
  }
}
