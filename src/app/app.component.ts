import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/services/auth.service";
import {LoggedUser} from "./auth/models/loggedUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginAttempt();
  }

  loginAttempt() {
    const token = this.authService.getJwtToken();
    if (token) {
      const dateNow = Math.floor(Date.now() / 1000);
      const tokenPayload: LoggedUser = this.authService.getJwtPayload(token);
      this.authService.loggedUser = tokenPayload
      if (!(dateNow > tokenPayload.nbf && dateNow < tokenPayload.exp)) {
        this.authService.refreshToken().subscribe();
      }
    }
  }
}
