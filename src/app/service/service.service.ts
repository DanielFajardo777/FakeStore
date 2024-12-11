import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  myBehaviorSubject = new BehaviorSubject<string>("")
  productId = new BehaviorSubject<string>("")
  cart = new BehaviorSubject<Product[]>([]);
  showProductListComponent = new BehaviorSubject<boolean>(true) 

  constructor() {
   }

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
  addItemCart(product: Product) {
    const currentCart = this.cart.getValue();
    currentCart.push(product)
    this.cart.next(currentCart)
  }
  replaceCartProducts(array : any []){
    this.cart.next(array)
  }
  getCart(){
    return this.cart.asObservable();
  }
  setBoolean(data : boolean){
    this.showProductListComponent.next(data);
  }
  getBoolean(){
    return this.showProductListComponent.asObservable();
  }
}
