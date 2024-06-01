import { Component, Input } from '@angular/core';
import { Json } from '../interface/interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() isActive?: boolean;
  @Input() buttonText?: string;
  @Input() uploadFile: boolean = false;

  loadData(event: any){
    const inputValue = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsText(inputValue, 'UTF-8')
    fileReader.onload = () => {
      const data: Json = JSON.parse(fileReader.result as string)
      console.log(data.deliveries[0].date)
     }
     fileReader.onerror = (error) => {
       console.log(error);
     } 
  }
}
