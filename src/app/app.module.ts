import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';






import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { InsuranceProviderComponent } from './hospital-info/insurance-provider/insurance-provider.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PatientComponent } from './patient/patient.component';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RoutingModule } from './routing/routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DoctorModule } from './doctor/doctor/doctor.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { ModePipe } from './hospital-info/mode.pipe';
import { SearchPipe } from './hospital-info/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HospitalInfoComponent,
    InsuranceProviderComponent,
    DashboardComponent,
    EmployeeListComponent,
    PatientComponent,
    PostsComponent,
    PostsListComponent,
    MainNavComponent,
    PageNotFoundComponent,
    LoginComponent,
    PatientRegistrationComponent,
    RoomComponent,
    RoomListComponent,
    ModePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // TodosModule,    // remved for lay loading
    DoctorModule,
    SharedModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
