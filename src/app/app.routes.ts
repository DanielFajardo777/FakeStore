import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path : "", component: HeaderComponent},
    {path : "Detail", component : ProductDetailComponent},
    {path : "cart", component : CartComponent},
];
