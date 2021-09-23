import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  createP= new FormGroup({});

  constructor() { }

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
    )
  }
  get f()
  {
    return this.createP.controls;
  }

  onSubmit(form:any)
  {

  }


}
