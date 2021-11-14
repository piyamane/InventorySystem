import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    //return this.http.get(environment.apibaseurl+'Product/ProductList');
    return this.http
      .get<Product[]>(
        environment.apibaseurl +
          'Product/ProductList'
      )
      .pipe(map((res) => res));
  }

  addProduct(productObj: Product){
    let product ={
      name: productObj.product_name,
      description:productObj.product_description,
      quantity:productObj.product_qty,
      price:productObj.product_price
    }
    return this.http.post<any>(environment.apibaseurl+'Product', product ).pipe(map((res)=>res));
  }

  // get(id:any): Observable<any> {
  //   return this.http.get(`${environment.apibaseurl}/${id}`);
  // }

  // create(data:any): Observable<any> {
  //   return this.http.post(environment.apibaseurl, data);
  // }

  // update(id:any, data:any): Observable<any> {
  //   return this.http.put(`${environment.apibaseurl}/${id}`, data);
  // }

  deleteProduct(id:any): Observable<any> {
    return this.http.delete(`${environment.apibaseurl}Product/Product/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(environment.apibaseurl);
  // }

  // findByTitle(title:any): Observable<any> {
  //   return this.http.get(`${environment.apibaseurl}?title=${title}`);
  // }
}
