import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list/products-list.service';
import { ServiceService } from '../service/service.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private productService : ProductsListService, private service: ServiceService){}
  ngOnDestroy(): void {
    this.service.setBoolean(true)
  }
  ngAfterViewInit(): void {
    
  }
  id : string = "/"
  product : any
  category : string = ""

  ngOnInit(): void {

    this.service.getId().subscribe(data =>{
      this.id += data
      this.productService.getProducts(this.id).subscribe(data => {
        this.product = data
      })
    })
  }
  setProduct(id : string, products : any []= []){
    console.log(products)
    products.forEach(element => {
      if (element.id == id) {
        return element
      }
    });
  }
}
