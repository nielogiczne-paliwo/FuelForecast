import { Component } from '@angular/core';
import { delivierData } from '../interface/interface';
import { DashboardViewService } from '../service/dashboard-view.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css']
})
export class TimeSeriesComponent {
  private chart: any;
  loadedData: delivierData[] = [];
  delivieriesEachDay: {label: string; data: number[]}[] = [];
  days: Date[] = [];
  constructor(DashboardService: DashboardViewService){
    this.loadedData = DashboardService.getTableData();
    console.log(this.loadedData);
    this.setDataSet();
  }

  setDataSet(): void {
    let dates: Date[] = [];
    let DK: number[] = [];
    let ULG95: number[] = [];
    let ULTDK: number[] = [];
    let ULTSU: number[] = [];
    this.loadedData.forEach((i) =>{
      dates.push(i.date);
      DK.push(i.DK);
      ULG95.push(i.ULG95);
      ULTDK.push(i.ULTDK);
      ULTSU.push(i.ULTSU);
    });
    
    this.delivieriesEachDay = [
      {
        label: 'DK',
        data: DK,
      },
      {
        label: 'ULG95',
        data: ULG95,
      },
      {
        label: 'ULTDK',
        data: ULTDK,
      },
      {
        label: 'ULTSU',
        data: ULTSU,
      },
    ];
    this.days = dates; 
  }

  ngOnInit(): void {
    this.chart = new Chart('timeSeriesOfDel', {
      type: 'line',
      data: {
        labels: this.days,
        datasets: this.delivieriesEachDay,
      }
    })
  }
}
