import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Prod} from "./prod";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  eventEmitter= new EventEmitter<string>();
   private url: string = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this.url);
  }

  postProducts(catid: number, postData: Prod) {
    return this.http.post<any>(this.url, postData);
  }

}
