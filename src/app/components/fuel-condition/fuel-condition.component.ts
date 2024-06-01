import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { stationData } from '../../interface/interface';

@Component({
  selector: 'app-fuel-condition',
  templateUrl: './fuel-condition.component.html',
  styleUrls: ['./fuel-condition.component.css'],
})
export class FuelConditionComponent {
  @Input() isActive?: boolean;
  @Output() active = new EventEmitter<boolean>();
  fuelConditionForm: stationData;
  anotherDate: Date = new Date(2023, 11, 25);
  petrol: string[];
  dataStructure: string[];
  myForm: FormGroup = this.builder.group({});

  constructor(private builder: FormBuilder) {
    this.petrol = ['ULG95', 'DK', 'ULTSU', 'ULTDK'];
    this.dataStructure = ['maxStock', 'capacisty', 'inputData'];
    this.fuelConditionForm = {
      dateStart: this.anotherDate,
      dateEnd: this.anotherDate,
      ULG95: {
        maxStock: 0,
        capacisty: 0,
        inputData: 0,
      },
      DK: {
        maxStock: 0,
        capacisty: 0,
        inputData: 0,
      },
      ULTSU: {
        maxStock: 0,
        capacisty: 0,
        inputData: 0,
      },
      ULTDK: {
        maxStock: 0,
        capacisty: 0,
        inputData: 0,
      },
    };
  }
  ngOnInit() {
    this.myForm = this.builder.group({
      dateStart: [null, Validators.required],
      dateStop: [null, Validators.required],
      ULG95maxStock: [null, Validators.required],
      ULG95capacisty: [null, Validators.required],
      ULG95inputData: [null, Validators.required],
      DKmaxStock: [null, Validators.required],
      DKcapacisty: [null, Validators.required],
      DKinputData: [null, Validators.required],
      ULTSUmaxStock: [null, Validators.required],
      ULTSUcapacisty: [null, Validators.required],
      ULTSUinputData: [null, Validators.required],
      ULTDKmaxStock: [null, Validators.required],
      ULTDKcapacisty: [null, Validators.required],
      ULTDKinputData: [null, Validators.required],
    });
  }

  onSubmit() {
    const dataForm = this.myForm.value;
    this.fuelConditionForm = {
      dateStart: dataForm.dateStart,
      dateEnd: dataForm.dateStart,
      ULG95: {
        maxStock: dataForm.ULG95maxStock,
        capacisty: dataForm.ULG95capacisty,
        inputData: dataForm.ULG95inputData,
      },
      DK: {
        maxStock: dataForm.DKmaxStock,
        capacisty: dataForm.DKcapacisty,
        inputData: dataForm.DKinputData,
      },
      ULTSU: {
        maxStock: dataForm.ULTSUmaxStock,
        capacisty: dataForm.ULTSUcapacisty,
        inputData: dataForm.ULTSUinputData,
      },
      ULTDK: {
        maxStock: dataForm.ULTDKmaxStock,
        capacisty: dataForm.ULTDKcapacisty,
        inputData: dataForm.ULTDKinputData,
      },
    };
    this.closeForm();
  }
  closeForm() {
    this.active.emit(false);
  }
}
