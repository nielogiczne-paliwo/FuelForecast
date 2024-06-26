import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { dane_dostaw } from '../Książka 7';
import { DashboardViewService } from '../service/dashboard-view.service';
import { SessionService } from '../service/session.service';
import { delivierData } from '../interface/interface';

@Component({
  selector: 'app-wykres-slupkowy',
  templateUrl: './wykres-slupkowy.component.html',
  styleUrls: ['./wykres-slupkowy.component.css'],
})
export class WykresSlupkowyComponent {
  fontSize: number = 40;
  dostawy = dane_dostaw;
  private label: string[] = ['ULG95', 'DK', 'ULTSU', 'ULTDK'];
  private chart: any;
  private dane: number[] = [0, 0, 0, 0];
  private selectedDate: string = '06.11.2016';
  deliveryData: delivierData[] = [];
  constructor(sesion: SessionService) {
    this.deliveryData = sesion.getDataSession();
    this.setDataSet();
    if (window.innerWidth < 800) {
      this.fontSize = 20;
    }
  }

  ngOnInit(): void {
    this.setDeliverData();
    this.createChart();
  }

  private createChart(): void {
    this.chart = new Chart('fuel-by-day', {
      type: 'bar',
      data: {
        labels: this.label,
        datasets: [
          {
            label: 'Ilość dostarczonego paliwa',
            data: this.dane,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,

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
            text: 'Dostawa paliw dla danego dnia',
            color: 'white',
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          legend: {
            display: false,
          },
        },
      },
    });
  }

  setDataSet(): void {
    let copyLoadedData: delivierData[] = JSON.parse(
      JSON.stringify(this.deliveryData)
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
    preaparedData.push(lastElement);
    this.deliveryData = preaparedData;
  }
  private setDeliverData(): void {
    const selectedDateString = this.selectedDate;
    const delivery = this.deliveryData.find((d) => {
      const dateString =
        d.date instanceof Date ? this.formatDate(d.date) : d.date;
      return dateString === selectedDateString;
    });

    if (delivery) {
      this.dane = [delivery.ULG95, delivery.DK, delivery.ULTSU, delivery.ULTDK];
    } else {
      console.warn(`No data found for date: ${this.selectedDate}`);
    }
  }
  private formatDate(date: Date): string {
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}`;
  }
  changeData(event: any): void {
    this.selectedDate = event.target.value;
    this.setDeliverData();
    this.updateChart();
  }

  private updateChart(): void {
    this.chart.data.datasets[0].data = this.dane;
    this.chart.update();
  }
}
