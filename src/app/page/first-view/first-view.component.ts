import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css'],
})
export class FirstViewComponent {
  @Output() clickNextButton = new EventEmitter<number>();

  nextView() {
    this.clickNextButton.emit(2);
  }
}
