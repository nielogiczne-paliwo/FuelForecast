import { Injectable } from '@angular/core';
import { delivierData } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class FileDataService {
  private data: delivierData[];
  private loadFile: boolean;

  constructor() {
    this.data = [];
    this.loadFile = false;
  }

  getData(): delivierData[] {
    return this.data;
  }

  setData(x: delivierData[]): void {
    this.data = x;
    this.loadFile = true;
  }
  getLoadFile(): boolean {
    return this.loadFile;
  }
}
