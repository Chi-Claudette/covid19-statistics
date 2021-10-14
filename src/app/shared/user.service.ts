import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private  url: string="http://localhost:8080​/api​/users​/signup";
  private  url1: string="http://localhost:8080​/api/users/signin";

  userRegistration(user: User)
  {
    return this.http.post<any>(this.url, user);
  }
  userLogin(user: User)
  {
    return this.http.post<any>(this.url1, user);
  }

}

