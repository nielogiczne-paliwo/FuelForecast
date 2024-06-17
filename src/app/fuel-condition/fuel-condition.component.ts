import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { stationData } from '../interface/interface';
import { DataFormService } from '../service/data-form.service';

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
  dataStructure: {
    pl: string;
    en: string;
  }[] = [
    { pl: 'Pojemność', en: 'capacity' },
    { pl: 'Stan', en: 'inputData' },
  ];
  myForm: FormGroup = this.builder.group({});

  constructor(private builder: FormBuilder, private dataForm: DataFormService) {
    this.petrol = ['ULG95', 'DK', 'ULTSU', 'ULTDK'];
    this.fuelConditionForm = dataForm.getDataForm();
  }
  ngOnInit() {
    this.setForm();
  }
  setForm() {
    this.myForm = this.builder.group({
      dateStart: [this.fuelConditionForm.dateStart, Validators.required],
      dateStop: [this.fuelConditionForm.dateEnd, Validators.required],

      ULG95capacity: [
        this.fuelConditionForm.ULG95.capacity,
        Validators.required,
      ],
      ULG95inputData: [
        this.fuelConditionForm.ULG95.inputData,
        Validators.required,
      ],
      DKcapacity: [this.fuelConditionForm.DK.capacity, Validators.required],
      DKinputData: [this.fuelConditionForm.DK.inputData, Validators.required],

      ULTSUcapacity: [
        this.fuelConditionForm.ULTSU.capacity,
        Validators.required,
      ],
      ULTSUinputData: [
        this.fuelConditionForm.ULTSU.inputData,
        Validators.required,
      ],
      ULTDKcapacity: [
        this.fuelConditionForm.ULTDK.capacity,
        Validators.required,
      ],
      ULTDKinputData: [
        this.fuelConditionForm.ULTDK.inputData,
        Validators.required,
      ],
    });
  }
  activePanel() {
    this.fuelConditionForm = this.dataForm.getDataForm();
    this.setForm();
  }
  onSubmit() {
    const dataForm = this.myForm.value;
    this.fuelConditionForm = {
      dateStart: dataForm.dateStart,
      dateEnd: dataForm.dateStop,
      ULG95: {
        capacity: dataForm.ULG95capacity,
        inputData: dataForm.ULG95inputData,
      },
      DK: {
        capacity: dataForm.DKcapacity,
        inputData: dataForm.DKinputData,
      },
      ULTSU: {
        capacity: dataForm.ULTSUcapacity,
        inputData: dataForm.ULTSUinputData,
      },
      ULTDK: {
        capacity: dataForm.ULTDKcapacity,
        inputData: dataForm.ULTDKinputData,
      },
    };
    this.dataForm.setDataForm(this.fuelConditionForm);
    this.closeForm();
  }
  closeForm() {
    this.active.emit(false);
  }
}
