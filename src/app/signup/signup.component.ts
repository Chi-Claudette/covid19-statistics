import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../shared/user.service";
import {User} from "../user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private us: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'username': ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  get f(): {[key: string]: AbstractControl}{
    return this.signUpForm.controls;
  }
  onReset(){
    this.submitted = false;
    this.signUpForm.reset();
  }
  signUp(form: User){
    this.submitted = true;
    this.us.userRegistration(form)
      .subscribe(res =>{
        alert("Sign Up Sucessful");
        console.log(res);
        this.signUpForm.reset();
        this.router.navigate(['login']);
      },error=>{
        alert("something went wrong")
      })
  }

}
