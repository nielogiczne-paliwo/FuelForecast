import { Injectable } from '@angular/core';
import { stationData } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class DataFormService {
  private anotherDate: Date;
  private saveForm: boolean;
  private dataForm: stationData;

  constructor() {
    this.saveForm = false;
    this.anotherDate = new Date(2000, 0, 0);
    this.dataForm = {
      dateStart: this.anotherDate.toDateString(),
      dateEnd: this.anotherDate.toDateString(),
      ULG95: {
        maxStock: 0,
        capacity: 0,
        inputData: 0,
      },
      DK: {
        maxStock: 0,
        capacity: 0,
        inputData: 0,
      },
      ULTSU: {
        maxStock: 0,
        capacity: 0,
        inputData: 0,
      },
      ULTDK: {
        maxStock: 0,
        capacity: 0,
        inputData: 0,
      },
    };
  }
  getDataForm(): stationData {
    console.log(this.dataForm);

    return this.dataForm;
  }
  setDataForm(prop: stationData): void {
    this.dataForm = prop;
    this.saveForm = true;
  }
  getSaveForm(): boolean {
    return this.saveForm;
  }
  setRestartForm(): void {
    this.saveForm = false;
    this.dataForm = {
      dateStart: this.anotherDate.toDateString(),
      dateEnd: this.anotherDate.toDateString(),
      ULG95: {
        maxStock: 0,
        capacity: 0,
        inputData: 0,
      },
      DK: {
        maxStock: 0,
        capacity: 0,
        inputData: 0,
      },
      ULTSU: {
        maxStock: 0,
        capacity: 0,
        inputData: 0,
      },
      ULTDK: {
        maxStock: 0,
        capacity: 0,
        inputData: 0,
      },
    };
  }
}
