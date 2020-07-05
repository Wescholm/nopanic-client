import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {HeaderComponent} from "./components/header/header.component";
import {HeaderSearchComponent} from "./components/header/header-search/header-search.component";
import {MaterialModule} from "./material.module";
import {HeaderProfileComponent} from "./components/header/header-profile/header-profile.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CentralBannerComponent} from "./components/service-content/central-banner/central-banner.component";
import {ServiceContentComponent} from "./components/service-content/service-content.component";
import {FiltersComponent} from "./components/service-content/filters/filters.component";
import {OrdersNavigationComponent} from "./components/service-content/orders-navigation/orders-navigation.component";
import {OrderComponent} from "./components/service-content/order/order.component";
import {LoginComponent} from "./components/authorization/login/login.component";
import {PlaceOrderComponent} from "./components/place-order/place-order.component";
import {PasswordRecoveryComponent} from "./components/authorization/password-recovery/password-recovery.component";
import {HeaderMenuComponent} from "./components/header/header-menu/header-menu.component";
import {RegistrationComponent} from "./components/authorization/registration/registration.component";
import {AddResponseComponent} from "./components/order-content/add-response/add-response.component";
import {OrderResponseComponent} from "./components/order-content/order-response/order-response.component";
import {Response} from "./components/order-content/response/response.component";
import {HeaderBurgerMenuComponent} from "./components/header/header-burger-menu/header-burger-menu.component";
import {OrdersNavigationMobileComponent} from "./components/service-content/orders-navigation-mobile/orders-navigation-mobile.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    HeaderProfileComponent,
    HeaderMenuComponent,
    CentralBannerComponent,
    ServiceContentComponent,
    FiltersComponent,
    OrdersNavigationComponent,
    OrderComponent,
    FooterComponent,
    LoginComponent,
    PlaceOrderComponent,
    PasswordRecoveryComponent,
    RegistrationComponent,
    AddResponseComponent,
    OrderResponseComponent,
    Response,
    HeaderBurgerMenuComponent,
    OrdersNavigationMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
