import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../user";
import {UserService} from "../shared/user.service";
import {setupTestingRouter} from "@angular/router/testing";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  submitted= false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private us: UserService) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      'username' : ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  get f(): {[key: string]: AbstractControl}{
    return this.logInForm.controls;
  }
  Login(form: User){
    this.submitted = true;
    this.us.userLogin(form)
      .subscribe(res=>{
        console.log(res);
        this.router.navigate(['/db']);
      },error => {
       // alert("Something went wrong!!")
        console.log(error);
      })
  }

}
