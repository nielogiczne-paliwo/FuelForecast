import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AppComponent, HeaderNavbarComponent, FirstViewComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
