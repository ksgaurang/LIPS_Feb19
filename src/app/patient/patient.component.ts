import { Component, OnInit, Input } from '@angular/core';
import {IPatient} from './IPatient';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @Input() desease: string;
  @Input() patient: IPatient [];

  constructor() { }

  ngOnInit() {
  }

}
