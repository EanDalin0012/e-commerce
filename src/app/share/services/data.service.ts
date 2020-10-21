import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  private addCartSource =  new BehaviorSubject<any>('');
  cartData = this.addCartSource.asObservable();

  cartDataSource(message: any) {
    this.addCartSource.next(message);
  }
}
