import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, mapTo, tap} from "rxjs/operators";
import {config} from "../../config";
import {User} from "../models/user";
import {LoggedUser} from "../models/loggedUser";
import {UserInfo} from "../models/userInfo";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly at = "at";
  public loggedUser: LoggedUser;

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post<any>(`${config.apiUrl}${config.regUrl}`, data)
      .pipe(
        catchError(error => {
          alert(error.error);
          return of(false);
        })
      )
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${config.apiUrl}${config.loginUrl}`, user)
      .pipe(
        tap(token => this.doLoginUser(token)),
        mapTo(true),
        catchError(error => {
          return of(error);
        }));
  }

  getJwtPayload(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url
      .replace(/-/g, '+')
      .replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${config.apiUrl}${config.logoutUrl}`, null)
      .pipe(tap(() => this.doLogoutUser()))
  }

  getJwtToken() {
    return localStorage.getItem(this.at);
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(`${config.apiUrl}${config.refreshTokenUrl}`, null)
      .pipe(tap((userInfo: UserInfo) => {
      this.doLoginUser(userInfo);
    }));
  }

  private doLoginUser(userInfo: UserInfo) {
    this.loggedUser = this.getJwtPayload(userInfo.jwt);
    this.storeJwtToken(userInfo.jwt);
    this.storeProfileGradient(userInfo.profileGradient);
  }

  getUserAvailability(data: string, type: string) {
    return this.http.get<any>(`${config.apiUrl}${config.userAvailabilityUrl}`, {
      params: {
        data: data,
        type: type
      }
    }).pipe(
        catchError(error => {
          alert(error.error);
          return of(false);
        })
      )
  }

  public doLogoutUser() {
    this.loggedUser = null;
    this.removeToken();
    location.reload();
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.at, jwt);
  }

  private storeProfileGradient(profileGradient: any): void {
    if (profileGradient) {
      const { firstColor, secondColor, defaultColor } = profileGradient;
      localStorage.setItem("pg", `${firstColor}&${secondColor}&${defaultColor}`)
    }
  }

  private removeToken() {
    localStorage.removeItem(this.at);
  }

}
