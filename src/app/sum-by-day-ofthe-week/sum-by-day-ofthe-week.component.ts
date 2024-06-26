import { Component } from '@angular/core';
import { DashboardViewService } from '../service/dashboard-view.service';
import { weekData } from '../interface/interface';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sum-by-day-ofthe-week',
  templateUrl: './sum-by-day-ofthe-week.component.html',
  styleUrls: ['./sum-by-day-ofthe-week.component.css'],
})
export class SumByDayOFTheWeekComponent {
  fontSize: number = 40;
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
  sumDayData: number[] = [];
  constructor(DashboardService: DashboardViewService) {
    this.data = DashboardService.sumByDatOfTheWeek();
    if (window.innerWidth < 800) {
      this.fontSize = 20;
    }
  }
  ngOnInit(): void {
    this.sumDay();

    this.chart = new Chart('canvas1', {
      type: 'bar',

      data: {
        labels: this.label,
        datasets: [
          {
            label: 'Sumy wartości paliw',
            data: this.sumDayData,
            borderWidth: 2,
          },
        ],
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
              size: this.fontSize,
            },
            display: true,
            text: 'Suma dostarczonego paliwa z podziałem na dzień tygodnia',
            color: 'white',
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          legend: {
            position: 'bottom',
            align: 'center',
            maxHeight: 100,
            labels: {
              color: 'white',
              boxWidth: 40,
              padding: 40,
              font: {
                size: 18,
              },
            },
          },
        },
      },
    });
  }
  sumDay() {
    this.data.forEach((e) => {
      this.sumDayData.push(e.DK + e.ULG95 + e.ULTDK + e.ULTSU);
    });
  }
}
