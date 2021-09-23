import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css']
})
export class CreateCatComponent implements OnInit {
  createC= new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.createC= new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        im: new FormControl(null, Validators.required),


      }
    )
  }
  get f()
  {
    return this.createC.controls;
  }
  onSubmit(form:any)
  {

  }

}
