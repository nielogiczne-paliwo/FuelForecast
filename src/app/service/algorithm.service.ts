import { Injectable } from '@angular/core';
import get_deliveries from './algorytm/ungodly_abomination.js';
import { delivierData, stationData } from '../interface/interface.js';
import { SessionService } from './session.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlgorithmService {
  private deliverData: delivierData[] = [];
  constructor(private SesionService: SessionService, private router: Router) {}
  setDeliverData(formData: stationData) {
    let abc = get_deliveries(
      '10.11.2019',
      '21.11.2020',
      700,
      7000,
      18980,
      189890,
      0,
      10000,
      3590,
      35980
    ).then((data: delivierData[]) => {
      this.deliverData = data;
      this.getDeliverData();
    });
  }
  getDeliverData() {
    this.SesionService.setData(this.deliverData);
    this.router.navigate(['dashboard']);
  }
}
// formData.dateStart,
// formData.dateEnd,
// formData.ULG95.inputData,
// formData.ULG95.capacity,
// formData.DK.inputData,
// formData.DK.capacity,
// formData.ULTSU.inputData,
// formData.ULTSU.capacity,
// formData.ULTDK.inputData,
// formData.ULTDK.capacity
