import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {IHospitalInfo} from './hospital';

@Component({
  selector: 'app-hospital-info',
  templateUrl: './hospital-info.component.html',
  styleUrls: ['./hospital-info.component.css']
})
export class HospitalInfoComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  hospital: IHospitalInfo = {
    name : 'Gaurang',
    address : 'Sangli',
    specialization : 'Ortho'
  };

  @ViewChild('hospHeader') header: ElementRef;

  ngOnInit() {

    console.log(this.header.nativeElement);
    this.renderer.setProperty(this.header.nativeElement, 'innerText', 'New Header');
  }

}
