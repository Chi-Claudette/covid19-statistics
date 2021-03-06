import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../shared/category.service";
import {Cat} from "../shared/cat";

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css']
})
export class CreateCatComponent implements OnInit {
  cats: any[]= [];
  createC= new FormGroup({});
  error:any= null;
  success:any= false;
  isloading:any= false;
  modal= false;

  constructor(private cs: CategoryService) { }

  ngOnInit(): void {
    this.createC= new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        photos: new FormControl(null,),


      }
    );
  }
  get f()
  {
    return this.createC.controls;
  }
  onSubmit(form:Cat)
  {
    this.isloading=true;
    this.cs.createCat(form).subscribe(res =>
    {
      console.log(res);
      this.success=true;
      this.isloading=false;
      this.modal=true;
    },
      errorMessage =>
      {
        console.log(errorMessage);
        this.error= errorMessage;
        this.isloading=false;
      });

  }

}
