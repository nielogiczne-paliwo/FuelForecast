import { Component } from '@angular/core';
import { DashboardViewService } from '../service/dashboard-view.service';

@Component({
  selector: 'app-more-deliver',
  templateUrl: './more-deliver.component.html',
  styleUrls: ['./more-deliver.component.css'],
})
export class MoreDeliverComponent {
  moreDeliver: string[];
  titleText: string = '';
  constructor(DashboardService: DashboardViewService) {
    this.moreDeliver = DashboardService.getMoreDeliver();
    this.setTitle();
  }
  setTitle() {
    if (this.moreDeliver.length > 0)
      this.titleText =
        'Dni w których jest niezbędnych więcej niż jeden kierowca';
    else this.titleText = 'W wybranym okresie wystarszy jeden kierowca';
  }
}
