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
  isError: boolean;
  errorText: string;
  constructor(private fileData: FileDataService){
    this.data = fileData.getData();
    this.isError = false;
    this.errorText = ""
  }

  activeErrorMessage(value: boolean): void {
    this.isError = value;
  }

  loadData(event: any){
    const inputValue = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(inputValue, 'UTF-8');
    fileReader.onload = () => {
      try {
        const loadedFile = JSON.parse(fileReader.result as string);
        if (!("deliveries" in loadedFile) || !(loadedFile.deliveries))
          throw "Zła zawartość pliku"
        const loadedData: delivierData[] = loadedFile.deliveries;
        this.fileData.setData(loadedData);
      }catch(err) {
        if (typeof err === "string") {
          this.isError = true;
          this.errorText = err;
        } else if (err instanceof Error) {
          this.isError = true;
          this.errorText = "Zły format pliku, akceptowalny jest tylko json";
        }
      }
      
      // this.data = this.fileData.getData()
     }
     fileReader.onerror = (error) => {
        this.isError = true;
        this.errorText = `Błąd przy wczytywaniu pliku: ${error}`;
     } 
  }
}
