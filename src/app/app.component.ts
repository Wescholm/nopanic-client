import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "./auth/services/auth.service";
import {LoggedUser} from "./auth/models/loggedUser";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService) { }

  private subscription: Subscription;

  ngOnInit(): void {
    this.loginAttempt();
  }

  private loginAttempt(): void {
    const token = this.authService.getJwtToken();
    if (token) {
      const dateNow = Math.floor(Date.now() / 1000);
      const tokenPayload: LoggedUser = this.authService.getJwtPayload(token);
      this.authService.loggedUser = tokenPayload
      if (!(dateNow > tokenPayload.nbf && dateNow < tokenPayload.exp)) {
        this.subscription = this.authService.refreshToken().subscribe();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
