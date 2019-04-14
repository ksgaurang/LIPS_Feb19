import { Injectable } from '@angular/core';
import { IUser } from '../service/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  isAdmin = false;

  constructor() { }

  login(user: IUser) {
    if (user.password === 'test'
      && user.userName === 'test') {
      this.isLoggedIn = true;
    } else if (user.password === 'admin'
    && user.userName === 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    return this.isLoggedIn;
  }
}
