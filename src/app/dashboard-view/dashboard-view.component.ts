import { Component, HostListener } from '@angular/core';
import { DashboardViewService } from '../service/dashboard-view.service';
import { delivierData } from '../interface/interface';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
export class DashboardViewComponent {
  isActiveList: string = 'no-active';
  arrow: string = 'arrow_drop_down';
  activeChart: boolean;
  options: { name: string; state: string }[] = [
    { name: 'Dostawy na osi czasu', state: 'no-active' },
    { name: 'Dostawy paliw dla danego dnia', state: 'no-active' },
    { name: 'Suma dostarczonych paliw', state: 'no-active' },
    {
      name: 'Suma dostarczonego paliwa z podziałem na dzień tygodnia',
      state: 'no-active',
    },
    {
      name: 'Suma dostarczonego paliwa ze względu na dzień tygodnia i rodzaj paliwa',
      state: 'no-active',
    },
    {
      name: 'Dni w których jest niezbędnych więcej niż jeden kierowca',
      state: 'no-active',
    },
    { name: 'Tabela dostaw', state: 'no-active' },
  ];
  choosenOption: { name: string; state?: string } = {
    name: 'Wybierz typ wykresu',
  };
  constructor(DashboardService: DashboardViewService) {
    DashboardService.getSumDeliveryFuel();
    this.activeChart = false;
  }

  showList(): void {
    if (this.isActiveList === 'no-active') {
      this.arrow = 'arrow_drop_up';
      this.isActiveList = 'active';
    } else {
      this.arrow = 'arrow_drop_down';
      this.isActiveList = 'no-active';
    }
  }

  chooseChart(chart: { name: string; state: string }): void {
    this.choosenOption.state = 'no-active';
    this.choosenOption = chart;
    this.choosenOption.state = 'active';
    this.isActiveList = 'no-active';
    this.activeChart = true;
  }
}
