import { Component, SkipSelf, OnInit } from '@angular/core';
import { IPatient } from './patient/IPatient';
import { IDoctor } from './doctor/service/IDoctor';
import { DoctorService } from './doctor/service/doctor.service';
import { ObservableService } from './observables/observable.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `Hello
  //           {{title}}`,
  styles: ['h1 {color : crimson}']
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    @SkipSelf() private doctorService: DoctorService,
    private obsService: ObservableService,
    private router: Router) {}
  title = 'Hospital Management System';
  role = '';

  patientList: IPatient[] = [
    { name: 'Tarun', age: 28, desease: 'Mental Disorder' },
    { name: 'Saber', age: 36, desease: 'Full Mental Disorder' },
    { name: 'Arjun', age: 26, desease: 'Cancer' }
  ];

  ngOnInit() {

    this.router.events.subscribe((eve) => {
      if (ev => ev instanceof NavigationStart) {
        console.log(eve);
      }
    });

    this.obsService.getName().subscribe(data => console.log(data));
  }

  addDoctor() {
    this.doctorService.addDoctor({
      name: 'Kaya1',
      speciality: 'From App.Component Class',
      degree: 'MD,MBBS',
      joinedOn: new Date('01-01-2000'),
      contactNo: '4568674435',
      salary: 100000
    });
  }

  addName() {
    // this.obsService.setName('Gaurang').subscribe(data => console.log(data));   // work with of keyword

  }
}
