import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [ {path : '', component: TodosComponent, canActivate: [AuthGuard],  canActivateChild: [AuthGuard], children: [
  {path : ':id', component: TodoDetailsComponent},  // If you have multiple parameters then usepath : 'todo/:id/:name'
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
