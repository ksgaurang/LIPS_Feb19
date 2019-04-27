import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, CanLoad, CanActivateChild, RouterStateSnapshot,
  Router, Route, UrlSegment, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/service/login.service';
import { PatientRegistrationComponent } from '../patient/patient-registration/patient-registration.component'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild, CanDeactivate<PatientRegistrationComponent> {

  constructor(private loginService: LoginService, private route: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggedIn) {
      return true;
    } else {
      this.route.navigate(['\login']);
      return false;
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggedIn) {
      return true;
    } else {
      this.route.navigate(['\login']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.loginService.isAdmin ? true : false;
  }

  canDeactivate(component: PatientRegistrationComponent, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean>
    | boolean{
        return component.isChanged ? false : true;
    }
}
