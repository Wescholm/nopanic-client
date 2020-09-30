import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate () {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login'])
    }
    return this.authService.isLoggedIn()
  }


}
