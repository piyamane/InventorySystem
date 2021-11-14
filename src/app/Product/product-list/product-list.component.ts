import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[]=[];
  modalRef!: BsModalRef;
  constructor(private productService: ProductService,
    public modalService: BsModalService,
    public alertService: AlertService,) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    debugger
    this.productService.getAll()
      .subscribe(
        data => {
          debugger
          this.productList = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  openAddProductDialog(){
    
    this.modalRef = this.modalService.show(AddProductComponent, {
      animated: true,
      backdrop: 'static',
      class: 'modal-md',
    });
    this.modalRef.content.productAdded.subscribe((res: any) => {
      if (res) {
        this.getAllProducts();
      }
    });
    

  }
 viewEditModal(row: Product){
   const productObj = {
      productId: row.product_id,
      productName: row.product_name,
      Description: row.product_description,
      Quantity: row.product_qty,
      Price: row.product_price,
    };
  this.modalRef = this.modalService.show(EditProductComponent, {
    initialState: productObj,
    animated: true,
    backdrop: 'static',
    class: 'modal-md',
  });
  this.modalRef.content.productAdded.subscribe((res: any) => {
    if (res) {
      this.getAllProducts();
    }
  });
 }
  editProduct(product: Product){

  }
  deleteProduct(product: Product){
    this.productService.deleteProduct(product.product_id)
      .subscribe(
        data => {
          debugger
          this.alertService.success(
            'New Product added!'
          );
          this.getAllProducts();
        },
        error => {
          console.log(error);
        });
  }
}
