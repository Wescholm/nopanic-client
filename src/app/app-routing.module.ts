import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceContentComponent} from "./components/service-content/service-content.component";
import {PasswordRecoveryComponent} from "./components/authorization/password-recovery/password-recovery.component";
import {LoginComponent} from "./components/authorization/login/login.component";
import {RegistrationComponent} from "./components/authorization/registration/registration.component";
import {AuthGuard} from "./auth/guards/auth.guard";
import {OrderContentComponent} from "./components/order-content/order-content.component";

const routes: Routes = [
  {path: '', redirectTo: 'services', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'password-recovery', component: PasswordRecoveryComponent},
  {path: 'services', component: ServiceContentComponent},
  {path: 'order-content', component: OrderContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
