import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Output('ProductEdited') productAdded = new EventEmitter<Boolean>();
  editProductForm!: FormGroup;
  modalRef!: BsModalRef;
  productId: any ='';
      productName: any='';
      Description!: any;
      Quantity!: any;
      Price!: any;
  constructor(private productService: ProductService,
    public bsModalRef: BsModalRef,
    public alertService: AlertService,) { }

  ngOnInit(): void {
    this.editProductForm = new FormGroup({
      ProductName: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required),
      Quantity: new FormControl('', Validators.required),
      Price: new FormControl('', Validators.required),
    });
  }

  saveEditedData(){

  }
}
