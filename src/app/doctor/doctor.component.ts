import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, ViewChildren, QueryList, Self } from '@angular/core';
import { IDoctor } from './service/IDoctor';
import { DoctorService } from './service/doctor.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers : [DoctorService]
})
export class DoctorComponent implements OnInit, DoCheck, AfterViewInit {

  constructor(@Self() private docService: DoctorService) {}

  doctorList: Array<IDoctor> = [];
  selectedDoctor: IDoctor;

  // creating instance of HeaderCoponent class
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChldren: QueryList<HeaderComponent>;

  ngOnInit() {
    this.doctorList = this.docService.getDocList();
  }

  ngDoCheck(): void {
    console.log('DoCheck event is called!');
  }

  addDoctor(): void {


    this.doctorList = this.docService.addDoctor({
          name: 'Kaya',
          speciality: 'From Same Class',
          degree: 'MD,MBBS',
          joinedOn: new Date('01-01-2000'),
          contactNo: '4568674435',
          salary: 100000
        });
    // this will work with Change Detection

    // comentted due to we add in service

    // this.doctorList = [
    //   ...this.doctorList,
    //   {
    //     name: "Kaya",
    //     speciality: "Women Specialist",
    //     degree: "MD,MBBS",
    //     joinedOn: new Date("01-01-2000"),
    //     contactNo: "4568674435",
    //     salary: 100000
    //   }
    // ];

    // will modify the object. will not work with change detection onPush
    // this.doctorList.push({name : 'Kaya', speciality:'Women Specialist', degree:'MD,MBBS',
    // joinedOn: new Date('01-01-2000'), contactNo:'4568674435', salary:100000})
  }

  receiveDoctorDetails(doctor: IDoctor) {
    this.selectedDoctor = doctor;
  }

  ngAfterViewInit(): void {
   // this.headerComponent.header = "Selected Doctor's Details";

    // This will not give you an error in Console
    setTimeout(() => this.headerComponent.header = 'Selected Doctor\'s Details', 0);

    this.headerChldren.forEach((headerComp, i) => {
      console.log(i);
      setTimeout(() => headerComp.header = 'Selected Doctor from Children', 0);
    });
  }
}
