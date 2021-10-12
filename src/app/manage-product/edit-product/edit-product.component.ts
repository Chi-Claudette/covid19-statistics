import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../shared/product.service";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../shared/category.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editP= new FormGroup({});
  proid:number= 0;
  product:any={};
  cats:any[]= [];
  isloading:any= false;
  success:any= false;
  error:any= null;
  constructor(private ps: ProductService, private cs: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editP= new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        quant: new FormControl(this.product.quant, Validators.required),
        uprice: new FormControl(this.product.uprice, Validators.required),
        cur: new FormControl(this.product.cur, Validators.required),
        cat: new FormControl(null, Validators.required),
        pi: new FormControl(null, Validators.required),
        des: new FormControl(null),

      }
    );
    this.isloading= true;
    this.proid= this.route.snapshot.params.id;
    this.ps.getAProducts(this.proid).subscribe(res =>
    {
      this.product= res;
      this.isloading=false;
    },
      errorMessage =>
      {
        console.log(errorMessage);
        this.isloading=false;
      });

    this.getCats();
  }
  get f()
  {
    return this.editP.controls;
  }

  onSubmit(id: number, form:any)
  {
    this.isloading= true;
    this.ps.editproduct(id,form).subscribe(res=>
    {
      console.log(res);
      this.success= true;
      this.isloading= false;
    },
      errorMessage =>
      {
        this.error= errorMessage;
      }
    )
  }
  getCats()
  {
    this.cs.getCat().subscribe(res =>
    {
      this.cats= res;
    },
      errorMessage =>
      {
        console.log(errorMessage);
      })
  }


}
