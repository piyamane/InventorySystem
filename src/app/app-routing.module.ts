import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { ProductListComponent } from './Product/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'Products', component: ProductListComponent },
  { path: 'ProductDetails', component: ProductDetailsComponent },
  { path: 'add', component: AddProductComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
