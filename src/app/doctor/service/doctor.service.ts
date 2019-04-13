import { Injectable } from '@angular/core';
import { IDoctor } from './IDoctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  docList: Array<IDoctor> = [];

  constructor() { }

  getDocList(): Array<IDoctor> {
    return this.docList = [
       {
         name: 'Gaurang',
         speciality: 'Ortho',
         degree: 'MS',
         joinedOn: new Date('01-01-2010'),
         contactNo: '88776655443',
         salary: 100000
       },
       {
         name: 'Gaurav',
         speciality: 'Dentist',
         degree: 'BDMS',
         joinedOn: new Date('01-01-2012'),
         contactNo: '47788785755',
         salary: 100000
       },
       {
         name: 'Ajay',
         speciality: 'Urologist',
         degree: 'MBBS',
         joinedOn: new Date('01-01-2009'),
         contactNo: '55546767467',
         salary: 100000
       },
       {
         name: 'Suraj',
         speciality: 'Neurology',
         degree: 'MS',
         joinedOn: new Date('01-01-2013'),
         contactNo: '46845756466',
         salary: 100000
       },
       {
         name: 'Pravin',
         speciality: 'General Physician',
         degree: 'BAMS',
         joinedOn: new Date('01-01-2015'),
         contactNo: '46546546546',
         salary: 100000
       },
       {
         name: 'Naresh',
         speciality: 'D_Ortho',
         degree: 'MD,MBBS',
         joinedOn: new Date('01-01-2016'),
         contactNo: '79768674435',
         salary: 100000
       }
     ];
   }

   addDoctor(doctor: IDoctor) {
     return this.docList = [
       ...this.docList,
       doctor
     ];
   }
}
