import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { FuelConditionComponent } from './fuel-condition/fuel-condition.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { AppRoutingModule } from './app-routing.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FirstViewComponent,
    ButtonComponent,
    LogoComponent,
    SecondViewComponent,
    FuelConditionComponent,
    DashboardViewComponent,
    ErrorMessageComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
