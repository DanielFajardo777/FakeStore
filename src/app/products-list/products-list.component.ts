import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsListService } from './products-list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';


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
@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  showComponentProductList = true;
  categories : string [] = [
    "All",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]
  selectedOption : string = "All";
  productsList : any[]=[];
  category : string = "";
  products : any [] = []
  productName : string = ""
  productClick : string = ""

  constructor(private router: Router, private ProductsListService: ProductsListService,private service: ServiceService){}

  ngOnInit(): void {
    this.ProductsListService.getProducts(this.category).subscribe(data => {
      this.productsList = data;
      this.products = data;
      this.service.getData().subscribe(data => {
        this.productName = data; //changes of behavior subject
        this.products = this.filterName(this.productsList,this.productName)
      });

      this.products = this.filterName(this.productsList,this.productName)
    })
  }
  filterCategory(productsList: any [], category: string){
    return productsList.filter((product) => product.category === category);
  }
  filterName(productsList: any [], name: string){
    if (name == "") {
      return productsList
    } else{
      return this.productsList.filter((product) => ((product.title) as string).toLowerCase().includes(name.toLocaleLowerCase()))
    }
  }
  changeOption(){
    if (this.selectedOption == "All") {
      this.products = this.productsList
    } else{
      this.products = this.filterCategory(this.productsList, this.selectedOption)
    }
    console.log(this.products)
    console.log(this.service.getData())
  }
  click(productId : any){
    this.router.navigate(["/Detail"])
    this.service.setId(productId)
    this.service.setBoolean(false)
  }
  filterId(productsList : any [], id:string){
    for (let index = 0; index < productsList.length; index++) {
      if (productsList[index].id == id) {
        return productsList[index]
      }
    }
  }
  btnClick(event:Event, id : string){
    // this.router.navigate(["/cart"])
    event.stopPropagation();
    this.service.addItemCart(this.filterId(this.productsList,id))
  }
}
