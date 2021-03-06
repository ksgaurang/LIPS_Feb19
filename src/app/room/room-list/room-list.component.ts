import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray} from '@angular/forms'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  roomsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.roomsForm = this.fb.group({
      roomType: new FormControl(),
      roomAvailability: new FormControl(),
      roomCost: new FormControl(),
      facilities: this.fb.group({
        swimingPool: new FormControl(),
        childrenGarden: new FormControl()
      }),
      previousHistory: this.fb.array([
        this.buildForm()
      ])
    });
  }

  private buildForm(): any {
    return this.fb.group({
      admissionID: new FormControl(),
      checkingDate: new FormControl(),
      checkoutDate: new FormControl()
    });
  }

  addRoom() {
    const historyControl =  this.roomsForm['controls'].previousHistory as FormArray;
    historyControl.push(this.buildForm());
  }
}
