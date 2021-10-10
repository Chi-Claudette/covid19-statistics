import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../shared/category.service";
import {ActivatedRoute} from "@angular/router";
import {Cat} from "../../shared/cat";

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {
  editC= new FormGroup({});
  id: number= 0;
  categ: any= {};
  isloading: any= false;
  success: any= false;
  error: any= null;

  constructor(private cs: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.categ.name);
    this.editC= new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        im: new FormControl(null, Validators.required),
      }
    );
    this.isloading=true;
    this.id= this.route.snapshot.params.id;
    this.cs.getACat(this.id).subscribe(res =>
    {
      this.categ= res;
      console.log(this.categ.name);
      this.isloading= false;
    },
      errorMessage =>
      {
        console.log(errorMessage);
        this.isloading= false;
      })
  }
  get f()
  {
    return this.editC.controls;
  }
  onSubmit(id:number, form:Cat)
  {
    this.isloading= true;
    this.cs.editCat(id, form).subscribe(res =>
    {
      console.log(res);
      this.isloading= false;
      this.success= true;
    },
      errorMessage =>
      {
        this.error= errorMessage;
        this.isloading= false;
      })

  }

}
