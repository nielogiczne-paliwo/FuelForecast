import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeView: number;
  constructor() {
    this.activeView = 3;
  }
  setActiveactiveView(event: number) {
    this.activeView = event;
  }
}
