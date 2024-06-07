import { Component } from '@angular/core';
import { DashboardViewService } from '../service/dashboard-view.service';
import { delivierData } from '../interface/interface';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
export class DashboardViewComponent {
  constructor(DashboardService: DashboardViewService) {
    DashboardService.getSumDeliveryFuel();
  }
}
