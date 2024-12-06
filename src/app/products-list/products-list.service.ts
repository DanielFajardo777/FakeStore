import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { get } from 'node:http';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  apiUrl: string = "https://fakestoreapi.com/products";


  constructor(private http: HttpClient) { } // Inject HttpClient

  getProducts(category : string): Observable<any> {
    return this.http.get<any>(this.apiUrl+category);

  }
  getProduct(id : string): Observable<any> {
    console.log(this.apiUrl+id)
    return this.http.get<any>(this.apiUrl+id);

  }
}