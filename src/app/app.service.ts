import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  sendSelcetedCountryName = new BehaviorSubject<any>('');
  addData(event) {
    this.sendSelcetedCountryName.next(event);
  }
}
