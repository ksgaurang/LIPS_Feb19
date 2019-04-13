import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ObservableService} from '../observables/observable.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation : ViewEncapsulation.None,
  host : {class : 'app-employee'}
})
export class EmployeeComponent implements OnInit {

  name = 'Gaurang';
  isHidden = false;
  city = 'Sangli';

  constructor(private obsService: ObservableService) { }

  ngOnInit() {
    this.obsService.getName().subscribe(data => console.log(data));
  }

  getName(): string {
    return this.name;
  }

  changeName(name: any) {
    this.name = name.target.value;
    this.city = 'Pune';
  }

  toggleInputs() {
    this.isHidden = !this.isHidden;
  }

}
