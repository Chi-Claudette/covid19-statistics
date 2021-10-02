import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/product.service";
import {Prod} from "../shared/prod";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  createP= new FormGroup({});
  products: any[] = [];

  constructor(private  getProducts: ProductService) { }

  ngOnInit(): void {
    this.createP= new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        quant: new FormControl(null, Validators.required),
        uprice: new FormControl(null, Validators.required),
        cur: new FormControl(null, Validators.required),
        cat: new FormControl(null, Validators.required),
        pi: new FormControl(null, Validators.required),
        des: new FormControl(null),

      }
    );

    this.getProducts.getProducts().subscribe(res => {
      this.products = res;
      console.log(res);
    });
  }
  get f()
  {
    return this.createP.controls;
  }

  onSubmit(form: Prod)
  {
      this.getProducts.postProducts(form).subscribe(res => {
        console.log((res));
      })
  }


}
