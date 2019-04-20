import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.registrationForm = this.fb.group({
      name: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      address: this.fb.group({
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl('')
      }),
      previousHistory: this.fb.array([
        this.fb.group({
          hospitalizedAt: new FormControl(''),
          fromdate: new FormControl(''),
          todate: new FormControl(''),
          desease: new FormControl('')
        })
      ])
    });
  }

}
