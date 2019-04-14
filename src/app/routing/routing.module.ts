import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { TodosComponent } from '../todos/todos.component';
import { DoctorComponent } from '../doctor/doctor.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PatientComponent } from '../patient/patient.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { TodoDetailsComponent } from '../todos/todo-details/todo-details.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../guard/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path : 'login', component: LoginComponent},
      {path : 'todo', loadChildren: '../todos/todos.module#TodosModule'},
      {path : 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
      {path : 'doctor', component: DoctorComponent, canActivate: [AuthGuard]},
      {path : 'dashboard', component: DashboardComponent},
      {path : 'patient', component: PatientComponent, canActivate: [AuthGuard]},
      {path : '', redirectTo : 'login', pathMatch: 'full'},
      // {path : '', redirectTo : 'todo', pathMatch: 'full'},   // default page
      {path : '**', component : PageNotFoundComponent}

    ])
  ],
  exports : [RouterModule]
})
export class RoutingModule { }
