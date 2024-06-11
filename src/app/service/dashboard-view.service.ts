import { Injectable } from '@angular/core';
import { delivierData } from '../interface/interface';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardViewService {
  private data: delivierData[];
  private tableData: delivierData[] = [];
  constructor(SessionService: SessionService) {
    this.data = SessionService.getDataSession();
    this.setTableData();
  }
  getSumDeliveryFuel(): { [key: string]: number } {
    let deliverFuel: { [key: string]: number } = {
      ULG95: 0,
      DK: 0,
      ULTSU: 0,
      ULTDK: 0,
    };
    this.data.forEach((e, index) => {
      deliverFuel['ULG95'] += e.ULG95;
      deliverFuel['DK'] += e.DK;
      deliverFuel['ULTSU'] += e.ULTSU;
      deliverFuel['ULTDK'] += e.ULTDK;
    });
    return deliverFuel;
  }

  setTableData() {
    let TableData: delivierData[];
    TableData = this.data;
    TableData.forEach((e, i) => {
      TableData.forEach((e1, j) => {
        if (e1.date == e.date && i != j) e1.moreDeliver = true;
      });
    });
    this.tableData = TableData;
  }
  getMoreDeliver(): string[] {
    let moreDeliver: string[] = [];
    this.tableData.forEach((e) => {
      if (e.moreDeliver && !moreDeliver.includes(e.date.toString()))
        moreDeliver.push(e.date.toString());
    });
    return moreDeliver;
  }
}
