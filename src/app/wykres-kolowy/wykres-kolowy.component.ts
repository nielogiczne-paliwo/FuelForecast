import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { dane_dostaw } from '../Książka 7';
//import { Plugin } from 'chart.js/auto';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-wykres-kolowy',
  templateUrl: './wykres-kolowy.component.html',
  styleUrls: ['./wykres-kolowy.component.css']
})
// (async function() {
//   const data = [
//     { year: 2010, count: 10 },
//     { year: 2011, count: 20 },
//     { year: 2012, count: 15 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 22 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 },
//   ];

export class WykresKolowyComponent {
  label: string[] = ['ULG95', 'DK', 'ULTSU', 'ULTDK'];
  chart: any;
  dane: number[] = [0, 0, 0, 0];

  ngOnInit(): void {
    this.funkcja();

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
        plugins: {
          title: {
            font: {
              size: 40
            },
            display: true,
            text: 'Jakiś tytuł',
            color: 'white',
            padding: {
              top: 10,
              bottom: 30
          },
          },
          legend: {
            position:'bottom',
            align: 'center',
            maxHeight: 100,
            labels: {
              color: 'white',
              boxWidth:40,
              padding: 40,
              font: {
                    size: 18
                }
            }
        }
        },
      }
    });
    this.chart.options.animation = false;
  }

  funkcja(): void {
    const sumy: { [key: string]: number } = {
      'ULG95': 0,
      'DK': 0,
      'ULTSU': 0,
      'ULTDK': 0
    };

    dane_dostaw.forEach(ele => {
      sumy['ULG95'] += ele['ULG95'] || 0;
      sumy['DK'] += ele['DK'] || 0;
      sumy['ULTSU'] += ele['ULTSU'] || 0;
      sumy['ULTDK'] += ele['ULTDK'] || 0;
    });

    this.dane = [sumy['ULG95'], sumy['DK'], sumy['ULTSU'], sumy['ULTDK']];
  }
}