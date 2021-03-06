import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/product.service";
import {Prod} from "../shared/prod";
import {CategoryService} from "../shared/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  createP= new FormGroup({});
  cats: any[] = [];
  prod:any= {};
  error:any= null;
  success:any= false;
  isloading:any= false;

  constructor(private  ps: ProductService, private  cs: CategoryService) { }

  ngOnInit(): void {
    this.createP= new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        quantity: new FormControl(null, Validators.required),
        unitPrice: new FormControl(null, Validators.required),
        currency: new FormControl(null, Validators.required),
        description: new FormControl(null),
        prodPhtoto: new FormControl(null, Validators.required),
        category: new FormControl(null, Validators.required),

      }
    );
    this.getCats();

  }
  get f()
  {
    return this.createP.controls;
  }

  onSubmit(form: Prod)
  {
    this.isloading=true
      this.ps.postProducts(this.prod.id, form).subscribe(res => {
        console.log((res));
        console.log((this.prod.id));
        this.success=true;
        this.isloading=false;
      },
        errorMessage =>
        {
          console.log(errorMessage);
          this.error= errorMessage;
          this.isloading=false;
        }
        );
  }
  getCats()
  {
    this.cs.getCat().subscribe(res => {
      this.cats = res;
      console.log(res);
    },
      errorMessage =>
      {
        console.log(errorMessage);
      }
      );
  }


}
