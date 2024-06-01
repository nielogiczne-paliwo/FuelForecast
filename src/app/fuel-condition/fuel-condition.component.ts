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
  dataStructure: string[];
  myForm: FormGroup = this.builder.group({});

  constructor(private builder: FormBuilder, private dataForm: DataFormService) {
    this.petrol = ['ULG95', 'DK', 'ULTSU', 'ULTDK'];
    this.dataStructure = ['maxStock', 'capacisty', 'inputData'];
    this.fuelConditionForm = dataForm.getDataForm();
  }
  ngOnInit() {
    this.setForm();
  }
  setForm() {
    this.myForm = this.builder.group({
      dateStart: [this.fuelConditionForm.dateStart, Validators.required],
      dateStop: [this.fuelConditionForm.dateEnd, Validators.required],
      ULG95maxStock: [
        this.fuelConditionForm.ULG95.maxStock,
        Validators.required,
      ],
      ULG95capacisty: [
        this.fuelConditionForm.ULG95.capacisty,
        Validators.required,
      ],
      ULG95inputData: [
        this.fuelConditionForm.ULG95.inputData,
        Validators.required,
      ],
      DKmaxStock: [this.fuelConditionForm.DK.maxStock, Validators.required],
      DKcapacisty: [this.fuelConditionForm.DK.capacisty, Validators.required],
      DKinputData: [this.fuelConditionForm.DK.inputData, Validators.required],
      ULTSUmaxStock: [
        this.fuelConditionForm.ULTSU.maxStock,
        Validators.required,
      ],
      ULTSUcapacisty: [
        this.fuelConditionForm.ULTSU.capacisty,
        Validators.required,
      ],
      ULTSUinputData: [
        this.fuelConditionForm.ULTSU.inputData,
        Validators.required,
      ],
      ULTDKmaxStock: [
        this.fuelConditionForm.ULTDK.maxStock,
        Validators.required,
      ],
      ULTDKcapacisty: [
        this.fuelConditionForm.ULTDK.capacisty,
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
    this.dataForm.setDataForm(this.fuelConditionForm);
    this.closeForm();
  }
  closeForm() {
    this.active.emit(false);
  }
}
