import { Component, EventEmitter, Output } from '@angular/core';
import { DataFormService } from '../service/data-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css'],
})
export class SecondViewComponent {
  @Output() clickNextButton = new EventEmitter<number>();

  activeForm: boolean;
  activeError: boolean;

  constructor(private dataForm: DataFormService, private router: Router) {
    this.activeForm = false;
    this.activeError = false;
  }

  activform(value: boolean): void {
    this.activeForm = value;
    console.log(this.activeForm);
  }
  activeErrorMessage(value: boolean): void {
    this.activeError = value;
  }

  nextView() {
    if (!this.dataForm.getSaveForm()) this.activeError = true;
    else this.router.navigate(['dashboard']);
  }
}
