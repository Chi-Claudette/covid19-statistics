import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Prod} from "./prod";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>('https://fakestoreapi.com/products');
  }

  postProducts(postData: Prod) {
    return this.http.post<any>('https://fakestoreapi.com/products', postData);
  }

}
