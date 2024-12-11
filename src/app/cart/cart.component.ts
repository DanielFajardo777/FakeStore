import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartProducts : any [] = []
  subtotal : number = 0
  iva : number = 0
  total : number = 0

constructor(private router: Router, private service: ServiceService){}

  ngOnInit(): void {
    this.service.getCart().subscribe(data => {
      this.cartProducts = data
      this.subtotal = this.sumProducts()
      this.iva = ( this.subtotal * 0.19)
      this.total = this.iva + this.subtotal
    })
  }
  deleteClick(id : string){
    let newCartProducts : any [] = []
    for (let index = 0; index < this.cartProducts.length; index++) {
      if (this.cartProducts[index].id !== id) {
        newCartProducts.push(this.cartProducts[index])
      }
      else{
      }
    }
    this.service.replaceCartProducts(newCartProducts)
  }
  
  sumProducts(){
    let auxiliar : number = 0
    for (let index = 0; index < this.cartProducts.length; index++) {
      auxiliar += this.cartProducts[index].price
    }
    return auxiliar
  }
  addProducts(){
    this.router.navigate(["/"])
  }
}
