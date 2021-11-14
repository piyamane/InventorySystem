import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-alerts';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    EditProductComponent,
    AddProductComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
