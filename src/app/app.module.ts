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

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FirstViewComponent,
    ButtonComponent,
    LogoComponent,
    SecondViewComponent,
    FuelConditionComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
