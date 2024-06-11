import { Injectable } from '@angular/core';
import { delivierData } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private deliverData: delivierData[];
  constructor() {
    this.deliverData = [];
  }
  setData(uploadData: delivierData[]) {
    this.deliverData = uploadData;
    this.setSession(this.deliverData);
  }
  setSession(data: delivierData[]) {
    sessionStorage.setItem('deliverData', JSON.stringify(data));
  }

  getDataSession(): delivierData[] {
    const item: delivierData[] = JSON.parse(
      sessionStorage.getItem('deliverData') as string
    );
    return item;
  }
  setClearSession() {
    sessionStorage.clear();
  }
}
