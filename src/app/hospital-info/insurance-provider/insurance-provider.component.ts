import { Component, OnInit } from '@angular/core';
import {IInsuranceProvider} from './IInsurance-provider';

@Component({
  selector: 'app-insurance-provider',
  templateUrl: './insurance-provider.component.html',
  styleUrls: ['./insurance-provider.component.css']
})
export class InsuranceProviderComponent implements OnInit {

  providerName = '';

  providers: Array<IInsuranceProvider> = [
    {name : 'CANARA', cashLess : true, dailyLimit : 50000, coverage: .5, activateFrom : new Date('12-Jan-1980')},
    {name : 'Star Health', cashLess : false, dailyLimit : 10000, coverage: .7, activateFrom : new Date('21-May-1989')},
    {name : 'HDFC', cashLess : true, dailyLimit : 150000, coverage: .9, activateFrom : new Date('9-Aug-2000')}
  ];

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index;
  }



}
