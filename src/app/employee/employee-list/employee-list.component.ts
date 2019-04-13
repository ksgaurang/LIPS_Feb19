import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList: Array<string> = ['10th', '12th', 'BCA', 'MCA'];

  constructor() { }

  ngOnInit() {
  }

}
