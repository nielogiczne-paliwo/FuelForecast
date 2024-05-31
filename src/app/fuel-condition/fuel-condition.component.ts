import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fuel-condition',
  templateUrl: './fuel-condition.component.html',
  styleUrls: ['./fuel-condition.component.css'],
})
export class FuelConditionComponent {
  yStart = new FormControl('');
  yStop = new FormControl('');
  xLength = new FormControl('');
  myForm: FormGroup = this.builder.group({
    yStart: this.yStart,
    yStop: this.yStop,
    xLength: this.xLength,
  });

  constructor(private builder: FormBuilder) {}

  onSubmit() {}
}
