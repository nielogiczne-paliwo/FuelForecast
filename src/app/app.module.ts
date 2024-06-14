import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { FuelConditionComponent } from './fuel-condition/fuel-condition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { AppRoutingModule } from './app-routing.component';
import { LoadFileButtonComponent } from './load-file-button/load-file-button.component';
import { CloseButtonComponent } from './close-button/close-button.component';
import { WykresKolowyComponent } from './wykres-kolowy/wykres-kolowy.component';
import { MoreDeliverComponent } from './more-deliver/more-deliver.component';

import { DeliveryTableComponent } from './delivery-table/delivery-table.component';
import { SumByDayOFTheWeekComponent } from './sum-by-day-ofthe-week/sum-by-day-ofthe-week.component';
import { SumFuelByDayComponent } from './sum-fuel-by-day/sum-fuel-by-day.component';
import { TimeSeriesComponent } from './time-series/time-series.component';
import { WykresSlupkowyComponent } from './wykres-slupkowy/wykres-slupkowy.component';
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
    WykresKolowyComponent,
    ErrorMessageComponent,
    LoadFileButtonComponent,
    CloseButtonComponent,
    MoreDeliverComponent,
    DeliveryTableComponent,
    SumByDayOFTheWeekComponent,
    SumFuelByDayComponent,
    TimeSeriesComponent,
    WykresSlupkowyComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
