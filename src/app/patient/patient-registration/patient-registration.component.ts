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
  isChanged = false;

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
    }, { validators:[CustomValidator.validateDateRange] , updateOn: 'blur'}); // this is for form level

    // to get form level changes
    this.registrationForm.valueChanges.subscribe((data) => {
      console.log(data);
      this.isChanged = true;
    });

    this.bindData();
  }

  bindData() {
    this.registrationForm.patchValue({
      name: 'Test Patient',
      age: 10,
      email: 'test@gmail.com',
      mobile: '91232432',
      address: {
        addressLine1: 'Street No 3',
        addressLine2: 'Amar Apex',
        city: 'Pune',
        pin: 418382,
      },
      previousHistory: [
        {hospitalizedAt: 'JM Hospital', desease: 'NA'}
      ]
    });

  }

  private buildForm(): any {
    return this.fb.group({
      hospitalizedAt: new FormControl('', [Validators.required]),
      fromdate: new FormControl('', [Validators.required]),
      todate: new FormControl('', [Validators.required]),
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

  saveData() {
    console.log('Saved Values ' + this.registrationForm.getRawValue());
    this.registrationForm.reset({name: '',
    age: 0,
    email: '',
    mobile: 0,
    address: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      pin: 0,
    },
    previousHistory: [
      {hospitalizedAt: '', desease: ''},
    ]});
    this.isChanged = false;
  }
}
