import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editP= new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.editP= new FormGroup(
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
    return this.editP.controls;
  }

  onSubmit(form:any)
  {

  }


}
