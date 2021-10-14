import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Prod} from "./prod";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  eventEmitter= new EventEmitter<string>();
   private url: string = "http://localhost:8080/api/products"
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>("http://localhost:8080/api/products");
  }
  getAProducts(proid:number) {
    return this.http.get<any>(this.url+'/'+proid);
  }
  getProductByCat(catid: number)
  {
    return this.http.get<any>(this.url+'/categories/'+catid);
  }

  postProducts(catid: number, prod: Prod) {
    return this.http.post<any>(this.url, prod);
  }
  editproduct(proid:number, prod: Prod )
  {
    return this.http.put<any>(this.url+'/'+proid, prod);
  }
  deleteProduct(proid: number)
  {
    return this.http.delete(this.url+'/'+proid);
  }


}
