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
import {RegistrationComponent} from "./components/authorization/registration/registration.component";
import {AddResponseComponent} from "./components/order-content/add-response/add-response.component";
import {OrderResponseComponent} from "./components/order-content/order-response/order-response.component";
import {ResponseComponent} from "./components/order-content/response/response.component";
import {OrderContentComponent} from "./components/order-content/order-content.component";
import {OrdersNavigationMobileComponent} from "./components/service-content/orders-navigation-mobile/orders-navigation-mobile.component";
import {AuthModule} from "./auth/auth.module";
import {BurgerMenuComponent} from "./components/header/burger-menu/burger-menu.component";
import {BurgerMenuContentComponent} from "./components/header/burger-menu-content/burger-menu-content.component";
import {ServicesMenuComponent} from "./components/header/services-menu/services-menu.component";
import {GalleryComponent} from "./components/order-content/gallery/gallery.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {NgxSpinnerModule} from "ngx-spinner";
import {HttpClientModule} from "@angular/common/http";
import {NgxGalleryModule} from "@kolkov/ngx-gallery";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgSelectModule} from "@ng-select/ng-select";
import {CommonModule} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    HeaderProfileComponent,
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
    OrdersNavigationMobileComponent,
    ResponseComponent,
    OrderContentComponent,
    BurgerMenuComponent,
    BurgerMenuContentComponent,
    ServicesMenuComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgxGalleryModule,
    MatInputModule,
    MatSelectModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
