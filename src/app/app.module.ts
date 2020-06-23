import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {HeaderComponent} from "./components/header/header.component";
import {HeaderSearchComponent} from "./components/header/header-search/header-search.component";
import {MaterialModule} from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderProfileComponent} from "./components/header/header-profile/header-profile.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CentralBannerComponent} from "./components/service-content/central-banner/central-banner.component";
import {ServiceContentComponent} from "./components/service-content/service-content.component";
import {FiltersComponent} from "./components/service-content/filters/filters.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    HeaderProfileComponent,
    CentralBannerComponent,
    ServiceContentComponent,
    FiltersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
