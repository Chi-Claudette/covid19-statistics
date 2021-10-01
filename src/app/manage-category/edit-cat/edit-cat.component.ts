import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {
  editC= new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.editC= new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        im: new FormControl(null, Validators.required),


      }
    )
  }
  get f()
  {
    return this.editC.controls;
  }
  onSubmit(form:any)
  {

  }

}
