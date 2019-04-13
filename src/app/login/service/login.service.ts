import { Injectable } from '@angular/core';
import { IUser } from '../service/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  constructor() { }

  login(user: IUser) {
    if (user.password === 'test'
      && user.userName === 'test') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
}
