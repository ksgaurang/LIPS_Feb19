import { Component, OnInit } from '@angular/core';
import { IUser } from './service/IUser';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = {
    userName: '',
    password: ''
  };
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.loginService.login(this.user)) {
      this.router.navigate(['/todo']);
    }
  }

}
