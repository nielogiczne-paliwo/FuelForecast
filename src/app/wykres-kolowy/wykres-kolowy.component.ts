import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { dane_dostaw } from '../Książka 7';
//import { Plugin } from 'chart.js/auto';
import { LogoComponent } from '../logo/logo.component';
import { DashboardViewService } from '../service/dashboard-view.service';

@Component({
  selector: 'app-wykres-kolowy',
  templateUrl: './wykres-kolowy.component.html',
  styleUrls: ['./wykres-kolowy.component.css'],
})
export class WykresKolowyComponent {
  private label: string[] = ['ULG95', 'DK', 'ULTSU', 'ULTDK'];
  private chart: any;
  private dane: number[] = [0, 0, 0, 0];
  private deliverData: { [key: string]: number };
  constructor(private deliver: DashboardViewService) {
    this.deliverData = deliver.getSumDeliveryFuel();
    this.setDeliverData();
  }
  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: this.label,
        datasets: [
          {
            label: 'Sumy wartości',
            data: this.dane,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          title: {
            font: {
              size: 40,
            },
            display: true,
            text: 'Suma dostarczonych paliw',
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
    this.chart.options.animation = false;
  }
  setDeliverData() {
    this.dane = [
      this.deliverData['ULG95'],
      this.deliverData['DK'],
      this.deliverData['ULTSU'],
      this.deliverData['ULTDK'],
    ];
  }
}
