import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css'],
})
export class FirstViewComponent {
  constructor(private router: Router) {}

  nextView() {
    this.router.navigate(['selectData']);
  }
}
