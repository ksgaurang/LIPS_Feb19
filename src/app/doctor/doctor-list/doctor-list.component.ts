import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import {IDoctor} from '../service/IDoctor';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class DoctorListComponent implements OnInit, OnChanges {
  @Input() docList: Array<IDoctor> = [];
  @Output() selectedDoctor = new EventEmitter<IDoctor>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    // to check which property gets channged
    for (const prop in changes) {
      console.log(prop);
    }

  }


  sendSelectedDoctor(doctor: IDoctor) {
    this.selectedDoctor.emit(doctor);
  }
}
