import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoDetailsComponent
  ],
  imports: [
    TodosRoutingModule,
    SharedModule
  ],
  entryComponents: [  // for custom elements we need this
    TodosComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoDetailsComponent
  ]
})
export class TodosModule {
      constructor(private inject: Injector) {
          const todo =  createCustomElement(TodoAddComponent, { injector: inject});
          customElements.define('todo-element', todo);
      }
}
