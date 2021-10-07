import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../shared/category.service";

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css']
})
export class CreateCatComponent implements OnInit {
  cats: any[]= [];
  createC= new FormGroup({});

  constructor(private cs: CategoryService) { }

  ngOnInit(): void {
    this.createC= new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        im: new FormControl(null, Validators.required),


      }
    );
  }
  get f()
  {
    return this.createC.controls;
  }
  onSubmit(form:any)
  {
    this.cs.createCat(form).subscribe(res =>
    {
      console.log(res);
    })
  }

}
