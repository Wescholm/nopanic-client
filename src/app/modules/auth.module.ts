import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "../auth/token.interceptor";
import {AuthGuard} from "../auth/guards/auth.guard";
import {AuthService} from "../auth/services/auth.service";

@NgModule({
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class AuthModule { }
