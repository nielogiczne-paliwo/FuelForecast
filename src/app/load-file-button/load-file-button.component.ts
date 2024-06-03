import { Component, Input } from '@angular/core';
import { delivierData } from '../interface/interface';
import { FileDataService } from '../service/file-data.service';

@Component({
  selector: 'app-load-file-button',
  templateUrl: './load-file-button.component.html',
  styleUrls: ['../button/button.component.css']
})
export class LoadFileButtonComponent {
  @Input() isActive?: boolean;
  @Input() buttonText?: string;
  data: delivierData[];

  constructor(private fileData: FileDataService){
    this.data = fileData.getData();
  }

  loadData(event: any){
    const inputValue = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(inputValue, 'UTF-8');
    fileReader.onload = () => {
      const loadedData: delivierData[] = JSON.parse(fileReader.result as string).deliveries;
      this.fileData.setData(loadedData);
      // this.data = this.fileData.getData()
     }
     fileReader.onerror = (error) => {
       console.log(error);
     } 
  }
}
