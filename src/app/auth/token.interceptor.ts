import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {AuthService} from "./services/auth.service";
import {catchError, filter, switchMap, take} from "rxjs/operators";
import {urlConfig} from "../configs/url-config";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.getJwtToken()) {
      request = TokenInterceptor.addToken(request, this.authService.getJwtToken());
    }

    return <any>next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401 && !this.isHandlerAllowed(error.url)) {
        return this.handle401Error(request, next);
      } else {
        if (error.url.includes(urlConfig.refreshTokenUrl)) {
          this.authService.doLogoutUser()
        }
        return throwError(error);
      }
    }));
  }

  isHandlerAllowed(url: string) {
    const handlerException: string[] = [urlConfig.apiUrl + urlConfig.loginUrl, urlConfig.apiUrl + urlConfig.refreshTokenUrl];
    return handlerException.includes(url);
  }

  private static addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.jwt);
          return next.handle(TokenInterceptor.addToken(request, token.jwt));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(TokenInterceptor.addToken(request, jwt));
        }));
    }
  }
}
