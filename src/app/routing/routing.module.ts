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
import { PatientRegistrationComponent } from '../patient/patient-registration/patient-registration.component';
import { RoomListComponent } from '../room/room-list/room-list.component';
import { HospitalInfoComponent } from '../hospital-info/hospital-info.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path : 'login', component: LoginComponent},
      {path : 'todo', loadChildren: '../todos/todos.module#TodosModule'},
      {path : 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
      {path : 'doctor', component: DoctorComponent, canActivate: [AuthGuard]},
      {path : 'hospital', component: HospitalInfoComponent},
      {path : 'dashboard', component: DashboardComponent},
      {path : 'patient', component: PatientRegistrationComponent, canDeactivate: [AuthGuard]},
      {path : 'room', component: RoomListComponent},
      {path : '', redirectTo : 'login', pathMatch: 'full'},
      // {path : '', redirectTo : 'todo', pathMatch: 'full'},   // default page
      {path : '**', component : PageNotFoundComponent}

    ])
  ],
  exports : [RouterModule]
})
export class RoutingModule { }
