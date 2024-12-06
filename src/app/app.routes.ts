import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';

export const routes: Routes = [
    {path : "", component: ProductsListComponent},
    {path : "Detail", component : ProductDetailComponent}
    
];
