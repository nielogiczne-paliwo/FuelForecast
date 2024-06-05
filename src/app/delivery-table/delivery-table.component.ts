import { Component } from '@angular/core';
import { delivierData } from '../interface/interface';
import { FileDataService } from '../service/file-data.service';

@Component({
  selector: 'app-delivery-table',
  templateUrl: './delivery-table.component.html',
  styleUrls: ['./delivery-table.component.css'],
})
export class DeliveryTableComponent {
  deliveryData: delivierData[];
  constructor(private fileData: FileDataService) {
    this.deliveryData = fileData.getData();
  }
}
