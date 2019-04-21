import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, ValidationErrors, Validators} from '@angular/forms';
import { CustomValidator } from 'src/app/customValidator/custom.validator.service';

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
      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(20)],
        updateOn: 'blur'}), // this is for control level
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, CustomValidator.mobileNoValidator]),
      address: this.fb.group({
        addressLine1: new FormControl('', [Validators.required]),
        addressLine2: new FormControl(''),
        city: new FormControl('', [Validators.required]),
        pin: new FormControl('', [Validators.required])
      }),
      previousHistory: this.fb.array([
        this.buildForm()
      ])
    }, {updateOn: 'blur'}); // this is for form level
  }

  private buildForm(): any {
    return this.fb.group({
      hospitalizedAt: new FormControl('', [Validators.required]),
      fromdate: new FormControl('', [Validators.required]),
      todate: new FormControl(''),
      desease: new FormControl('', [Validators.required])
    });
  }

  addHistory(){
    const historyControl =  this.registrationForm['controls'].previousHistory as FormArray;
    historyControl.push(this.buildForm());
  }

  removeHistory(i: number) {
    const historyControl = this.registrationForm['controls'].previousHistory as FormArray;
    historyControl.removeAt(i);
  }

}
