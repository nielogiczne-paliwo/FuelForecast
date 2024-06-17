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
    let [year, month, day] = formData.dateStart.split('-');
    const dateStartString = day + '.' + month + '.' + year;
    let [year1, month1, day1] = formData.dateEnd.split('-');
    const dateEndString = day1 + '.' + month1 + '.' + year1;

    let abc = get_deliveries(
      dateStartString,
      dateEndString,
      formData.ULG95.inputData,
      formData.ULG95.capacity,
      formData.DK.inputData,
      formData.DK.capacity,
      formData.ULTSU.inputData,
      formData.ULTSU.capacity,
      formData.ULTDK.inputData,
      formData.ULTDK.capacity
    ).then((data: delivierData[]) => {
      this.deliverData = data;
      setTimeout(() => {
        this.getDeliverData();
      }, 2000);
    });
  }
  getDeliverData() {
    this.SesionService.setData(this.deliverData);
    this.router.navigate(['dashboard']);
    console.log(this.SesionService.getDataSession());
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
