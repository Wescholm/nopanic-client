import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./token.interceptor";
import {AuthGuard} from "./guards/auth.guard";
import {AuthService} from "./services/auth.service";

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
