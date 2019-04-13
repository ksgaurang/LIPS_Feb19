import { Component, OnInit } from '@angular/core';
import {IInsuranceProvider} from './IInsurance-provider';

@Component({
  selector: 'app-insurance-provider',
  templateUrl: './insurance-provider.component.html',
  styleUrls: ['./insurance-provider.component.css']
})
export class InsuranceProviderComponent implements OnInit {

  providers: Array<IInsuranceProvider> = [
    {name : 'CANARA', cashLess : true, dailyLimit : 50000},
    {name : 'Star Health', cashLess : false, dailyLimit : 10000},
    {name : 'HDFC', cashLess : true, dailyLimit : 150000}
  ];

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index;
  }



}
