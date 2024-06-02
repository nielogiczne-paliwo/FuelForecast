import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent {
  @Input() isActive?: boolean;
  @Output() active = new EventEmitter<boolean>();

  errorMessage() {
    this.active.emit(false);
  }
}
