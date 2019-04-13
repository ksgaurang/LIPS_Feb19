import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // template: '<h1>{{header}}</h1>',
  template: '<app-content>{{header}}</app-content>',   // content projection example
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = 'Default Header';
  constructor() { }

  ngOnInit() {
  }

}
