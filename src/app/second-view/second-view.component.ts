import { Component, EventEmitter, Output } from '@angular/core';
import { DataFormService } from '../service/data-form.service';
import { Router } from '@angular/router';
import { FileDataService } from '../service/file-data.service';
import { DashboardViewComponent } from '../dashboard-view/dashboard-view.component';
import { DashboardViewService } from '../service/dashboard-view.service';
import { SessionService } from '../service/session.service';
import { AlgorithmService } from '../service/algorithm.service';
import { callback } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css'],
})
export class SecondViewComponent {
  @Output() clickNextButton = new EventEmitter<number>();

  activeForm: boolean;
  activeError: boolean;

  constructor(
    private dataForm: DataFormService,
    private router: Router,
    private fileData: FileDataService,
    private SesionService: SessionService,
    private Algorithm: AlgorithmService
  ) {
    this.activeForm = false;
    this.activeError = false;
    dataForm.setRestartForm();
    SesionService.setClearSession();
  }

  activform(value: boolean): void {
    this.activeForm = value;
  }
  activeErrorMessage(value: boolean): void {
    this.activeError = value;
  }

  nextView() {
    if (this.dataForm.getSaveForm()) {
      this.Algorithm.setDeliverData(this.dataForm.getDataForm());
    } else if (this.fileData.getLoadFile()) {
      this.SesionService.setData(this.fileData.getData());
      this.router.navigate(['dashboard']);
    } else this.activeError = true;
  }
}
