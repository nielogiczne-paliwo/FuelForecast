import { Component } from '@angular/core';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css'],
})
export class SecondViewComponent {
  activeForm: boolean = false;

  activform(value: boolean): void {
    this.activeForm = value;
    console.log(this.activeForm);
  }
}
