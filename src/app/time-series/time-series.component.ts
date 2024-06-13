import { Component } from '@angular/core';
import { delivierData } from '../interface/interface';
import { DashboardViewService } from '../service/dashboard-view.service';
import { Chart } from 'chart.js';
import { min } from 'rxjs';

@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css']
})
export class TimeSeriesComponent {
  private chart: any;
  loadedData: delivierData[] = [];
  delivieriesEachDay: {label: string; data: {x: Date, y: number}[]}[] = [];
  allDates: number[] = [];
  minDate: Date = new Date('01.01.1900');
  maxDate: Date = new Date('31.12.2500');
  constructor(DashboardService: DashboardViewService){
    this.loadedData = DashboardService.getTableData();
    console.log(this.loadedData);
    this.setDataSet();
    this.setRangeOfDays();
    console.log(this.allDates)
    console.log(new Date(1452466800000))
  }

  setRangeOfDays(): void {
    this.minDate = new Date(Math.min(...this.allDates));
    this.maxDate = new Date(Math.max(...this.allDates));
  }


  setDataSet(): void {
    let DK: {x: Date, y: number}[] = [];
    let ULG95: {x: Date, y: number}[] = [];
    let ULTDK: {x: Date, y: number}[] = [];
    let ULTSU: {x: Date, y: number}[] = [];
    this.loadedData.forEach((i) =>{
      DK.push({x: i.date, y: i.DK});
      ULG95.push({x: i.date, y: i.ULG95});
      ULTDK.push({x: i.date, y: i.ULTDK});
      ULTSU.push({x: i.date, y: i.ULTSU});
      this.allDates.push(new Date(i.date).valueOf())
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
  }

  ngOnInit(): void {
    this.chart = new Chart('timeSeriesOfDel', {
      type: 'line',
      data: {
        datasets: this.delivieriesEachDay,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
          }
        },
        plugins: {
          title: {
            font: {
              size: 40,
            },
            display: true,
            text: 'Jakiś tytuł',
            color: 'white',
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          legend: {
            position: 'bottom',
            align: 'center',
            labels: {
              color: 'white',
              boxWidth: 40,
              padding: 10,
              font: {
                size: 18,
              }
            }
          }
        }
      }
    })
  }
}
