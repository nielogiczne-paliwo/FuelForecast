import { Injectable } from '@angular/core';
import { stationData } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class DataFormService {
  private anotherDate: Date = new Date(2000, 0, 0);
  private dataForm: stationData;

  constructor() {
    this.dataForm = {
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
  getDataForm(): stationData {
    return this.dataForm;
  }
  setDataForm(prop: stationData) {
    this.dataForm = prop;
  }
}
