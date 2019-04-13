import { Injectable } from '@angular/core';
import {of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  empName: '';

  constructor() { }

  // setName(name : string)
  // {
  //   return of(name);
  // }

  subject: Subject<string> = new Subject<''>();

  setName(name: string) {
    this.subject.next(name);
  }

  getName() {
    return this.subject.asObservable();
  }
}
