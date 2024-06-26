import { Component } from '@angular/core';
import { weekData } from '../interface/interface';
import { DashboardViewService } from '../service/dashboard-view.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sum-fuel-by-day',
  templateUrl: './sum-fuel-by-day.component.html',
  styleUrls: ['./sum-fuel-by-day.component.css'],
})
export class SumFuelByDayComponent {
  label: string[] = [
    'Niedziela',
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
  ];
  private chart: any;
  data: weekData[] = [];
  sumDayData: { label: string; data: number[] }[] = [];
  constructor(DashboardService: DashboardViewService) {
    this.data = DashboardService.sumByDatOfTheWeek();
    this.setDataSet();
  }

  ngOnInit(): void {
    this.chart = new Chart('fuleByDayChart', {
      type: 'bar',
      data: {
        labels: [
          'Niedziela',
          'Poniedziałek',
          'Wtorek',
          'Środa',
          'Czwartek',
          'Piątek',
          'Sobota',
        ],
        datasets: this.sumDayData,
      },
      options: {
        maintainAspectRatio: false,

        layout: {
          padding: 10,
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            font: {
              size: 40,
            },
            display: true,
            text: 'Suma dostarczonego ze względu na dzień tygodnia i rodzaj paliwa',
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
  setDataSet() {
    let paliwo1: number[] = [];
    let paliwo2: number[] = [];
    let paliwo3: number[] = [];
    let paliwo4: number[] = [];
    this.data.forEach((ele) => {
      paliwo1.push(ele.DK);
      paliwo2.push(ele.ULG95);
      paliwo3.push(ele.ULTDK);
      paliwo4.push(ele.ULTSU);
    });
    this.sumDayData = [
      {
        label: 'DK',
        data: paliwo1,
      },
      {
        label: 'ULG95',
        data: paliwo2,
      },
      {
        label: 'ULTDK',
        data: paliwo3,
      },
      {
        label: 'ULTSU',
        data: paliwo4,
      },
    ];
  }
}
