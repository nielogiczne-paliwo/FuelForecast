import { Component } from '@angular/core';
import { delivierData } from '../interface/interface';
import { DashboardViewService } from '../service/dashboard-view.service';
import { Chart } from 'chart.js';
import 'chartjs-adapter-moment';

@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css'],
})
export class TimeSeriesComponent {
  private chart: any;
  loadedData: delivierData[] = [];
  delivieriesEachDay: { label: string; data: { x: Date; y: number }[] }[] = [];
  allDatesDDMM: string[] = [];
  allDatesMMDD: number[] = [];
  minDate: string = '2000-01-01';
  maxDate: string = '2500-12-31';
  inputMinDate: string = '2000-01-01';
  inputMaxDate: string = '2500-12-31';

  constructor(DashboardService: DashboardViewService) {
    this.loadedData = DashboardService.getTableData();
    this.setDataSet();
    this.setRangeOfDays();
  }

  setRangeOfDays(): void {
    const minD: Date = new Date(Math.min(...this.allDatesMMDD));
    const maxD: Date = new Date(Math.max(...this.allDatesMMDD));
    this.minDate = this.changeDateFormatToYYYYMM(minD);
    this.maxDate = this.changeDateFormatToYYYYMM(maxD);
    this.inputMinDate = this.changeDateFormatToYYYYMM(minD);
    this.inputMaxDate = this.changeDateFormatToYYYYMM(maxD);
  }

  setMinDate(event: any) {
    this.inputMinDate = event.target.value;
  }

  setMaxDate(event: any) {
    this.inputMaxDate = event.target.value;
  }

  changeDateFormatToMMDD(date: string): Date {
    const month: string = date.substring(3, 6);
    const day: string = date.substring(0, 3);
    const year: string = date.substring(6);

    return new Date(month + day + year);
  }

  changeDateFormatToYYYYMM(date: Date): string {
    const day: string =
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString();
    const month: string =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : (date.getMonth() + 1).toString();
    const year: string = date.getFullYear().toString();

    return `${year}-${month}-${day}`;
  }

  changeYYYYMMToDateType(date: string): Date {
    const year: string = date.substring(0, 4);
    const month: string = date.substring(5, 7);
    const day: string = date.substring(8);

    return new Date(`${month}.${day}.${year}`);
  }

  updateChart(): void {
    this.setDataSet(false);
    this.chart.data.datasets = this.delivieriesEachDay;
    this.chart.update();
    console.log(this.delivieriesEachDay);
  }

  setDataSet(toDo: boolean = true): void {
    let copyLoadedData: delivierData[] = JSON.parse(
      JSON.stringify(this.loadedData)
    );
    let preaparedData: delivierData[] = [];
    let lastElement: delivierData = {
      date: new Date('01.01.1900'),
      ULG95: -1,
      DK: -1,
      ULTSU: -1,
      ULTDK: -1,
    };
    copyLoadedData.forEach((i) => {
      if (i.date !== lastElement.date) {
        if (lastElement.ULG95 !== -1) preaparedData.push(lastElement);
        lastElement = i;
      } else {
        lastElement.DK = lastElement.DK + i.DK;
        lastElement.ULG95 = lastElement.ULG95 + i.ULG95;
        lastElement.ULTDK = lastElement.ULTDK + i.ULTDK;
        lastElement.ULTSU = lastElement.ULTSU + i.ULTSU;
      }
    });
    if (preaparedData.at(-1)?.date !== lastElement.date)
      preaparedData.push(lastElement);

    this.delivieriesEachDay = [];
    let DK: { x: Date; y: number }[] = [];
    let ULG95: { x: Date; y: number }[] = [];
    let ULTDK: { x: Date; y: number }[] = [];
    let ULTSU: { x: Date; y: number }[] = [];
    let minDate: number = this.changeYYYYMMToDateType(
      this.inputMinDate
    ).valueOf();
    let maxDate: number = this.changeYYYYMMToDateType(
      this.inputMaxDate
    ).valueOf();
    preaparedData.forEach((i) => {
      let dateValueData: number = this.changeDateFormatToMMDD(
        i.date.toString()
      ).valueOf();
      if (dateValueData >= minDate && dateValueData <= maxDate) {
        DK.push({ x: this.changeDateFormatToMMDD(i.date.toString()), y: i.DK });
        ULG95.push({
          x: this.changeDateFormatToMMDD(i.date.toString()),
          y: i.ULG95,
        });
        ULTDK.push({
          x: this.changeDateFormatToMMDD(i.date.toString()),
          y: i.ULTDK,
        });
        ULTSU.push({
          x: this.changeDateFormatToMMDD(i.date.toString()),
          y: i.ULTSU,
        });
      }
      if (toDo) this.allDatesDDMM.push(i.date.toString());
    });

    if (toDo) {
      this.allDatesDDMM.forEach((i) => {
        this.allDatesMMDD.push(this.changeDateFormatToMMDD(i).valueOf());
      });
    }

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
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            type: 'time',
            time: {
              unit: 'day',
              displayFormats: {
                day: 'DD.MM.yyyy',
              },
            },
            ticks: {
              maxTicksLimit: 12,
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: (context) => {
                let date: Date = new Date(context[0].label);
                let day: string =
                  date.getDate() < 10
                    ? `0${date.getDate()}`
                    : date.getDate().toString();
                let month: string =
                  date.getMonth() + 1 < 10
                    ? `0${date.getMonth() + 1}`
                    : (date.getMonth() + 1).toString();
                let year: string = date.getFullYear().toString();

                return `${day}.${month}.${year}`;
              },
            },
          },
          title: {
            font: {
              size: 40,
            },
            display: true,
            text: 'Dostawy na osi czasu',
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
              },
            },
          },
        },
      },
    });
  }
}
