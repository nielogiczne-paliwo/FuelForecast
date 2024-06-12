import { Injectable } from '@angular/core';
import { delivierData, weekData } from '../interface/interface';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardViewService {
  private data: delivierData[];
  private tableData: delivierData[] = [];
  private dayofTheWeek: number[] = [];
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

  private setTableData() {
    let TableData: delivierData[];
    TableData = this.data;
    TableData.forEach((e, i) => {
      TableData.forEach((e1, j) => {
        if (e1.date == e.date && i != j) e1.moreDeliver = true;
      });
    });
    this.tableData = TableData;
  }
  getTableData(): delivierData[] {
    return this.tableData;
  }
  getMoreDeliver(): string[] {
    let moreDeliver: string[] = [];
    this.tableData.forEach((e) => {
      if (e.moreDeliver && !moreDeliver.includes(e.date.toString()))
        moreDeliver.push(e.date.toString());
    });
    return moreDeliver;
  }

  sumByDatOfTheWeek(): weekData[] {
    let dataFormat: weekData[] = [];
    for (let i = 0; i < 7; i++) {
      dataFormat.push({
        ULG95: 0,
        DK: 0,
        ULTSU: 0,
        ULTDK: 0,
      });
    }
    this.data.forEach((e) => {
      let dateToString = e.date.toString().split('.');
      let newDate = new Date(
        Date.UTC(
          parseInt(dateToString[2]),
          parseInt(dateToString[1]),
          parseInt(dateToString[0]),
          0,
          0,
          0
        )
      );
      let numberDay = (newDate.getUTCDay() + 4) % 7;
      dataFormat[numberDay].DK += e.DK;
      dataFormat[numberDay].ULG95 += e.ULG95;
      dataFormat[numberDay].ULTDK += e.ULTDK;
      dataFormat[numberDay].ULTSU += e.ULTSU;
    });
    return dataFormat;
  }
}
