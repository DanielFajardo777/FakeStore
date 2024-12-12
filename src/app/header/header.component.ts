import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { ProductsListComponent } from "../products-list/products-list.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ProductsListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  showProcuctListComponent = true
  products : any [] = []

  constructor(private router :Router, private service: ServiceService){}
  ngOnInit(): void {
    this.service.getCart().subscribe(data => {
      this.products = data
    });
    this.service.getBoolean().subscribe(data => {
      this.showProcuctListComponent = data
    })
  }
  cartClick(){
    this.router.navigate(["/cart"])
  }
  clickUser(){
    this.router.navigate(["/user"])
  }

    change(event: Event){
      const inputValue = (event.target as HTMLInputElement).value;
      this.service.setData(inputValue)
    }
  }
