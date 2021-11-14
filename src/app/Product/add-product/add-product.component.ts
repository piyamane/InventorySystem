import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output('ProductAdded') productAdded = new EventEmitter<Boolean>();
  addProductForm!: FormGroup;
  modalRef!: BsModalRef;

  constructor(private productService: ProductService,
    public bsModalRef: BsModalRef,
    public alertService: AlertService,) { }
  productId!: number;
  productName!: string;
  Description!: string;
  Quanity!: string;
  Price!: string;
  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      ProductName: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required),
      Quantity: new FormControl('', Validators.required),
      Price: new FormControl('', Validators.required),
    });
  }

  addProduct(): void {
    debugger
    let product ={
      product_id: 0,
      product_name: this.addProductForm.controls['ProductName'].value,
      product_description: this.addProductForm.controls['Description'].value,
      product_qty: this.addProductForm.controls['Quantity'].value,
      product_price: this.addProductForm.controls['Price'].value,
    }

    this.productService.addProduct(product).subscribe((res)=>{
      debugger
      this.productAdded.emit(true);
      this.alertService.success(
        'New Product added!'
      );
      this.bsModalRef.hide();
    }, (error)=>{

    });
  }

  newTutorial(): void {
    
  }
}
