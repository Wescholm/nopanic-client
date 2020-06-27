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
import {RegistrationComponent} from "./components/registration/registration.component";

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
    RegistrationComponent
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
