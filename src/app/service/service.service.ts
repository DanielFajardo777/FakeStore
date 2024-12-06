import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  myBehaviorSubject = new BehaviorSubject<string>("")
  productId = new BehaviorSubject<string>("")

  constructor() { }

  setData(data: string){
    this.myBehaviorSubject.next(data);
  }
  getData(){
    return this.myBehaviorSubject.asObservable();
  }
  setId(data: string){
    this.productId.next(data);
  }
  getId(){
    return this.productId.asObservable();
  }

}
