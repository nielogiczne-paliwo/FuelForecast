import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css'],
})
export class SecondViewComponent {
  @Output() clickNextButton = new EventEmitter<number>();

  nextView() {
    this.clickNextButton.emit(3);
  }
  activeForm: boolean = false;

  activform(value: boolean): void {
    this.activeForm = value;
    console.log(this.activeForm);
  }
}
