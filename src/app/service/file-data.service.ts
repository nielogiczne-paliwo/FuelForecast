import { Injectable } from '@angular/core';
import { delivierData } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class FileDataService {
  private data: delivierData[];

  constructor() {
    this.data = [];
   }

   getData(): delivierData[]{
    return this.data;
   }

   setData(x: delivierData[]): void{
    this.data = x;
   }
}
