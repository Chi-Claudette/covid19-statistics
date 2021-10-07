import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cat} from "./cat";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string = "http://localhost:3000/categories";

  constructor(private http: HttpClient) { }
  createCat(cat: Cat)
  {
    return this.http.post<any>(this.url, cat);
  }
  getCat()
  {
    return this.http.get<any>(this.url);
  }
  getACat(catid: number)
  {
    return this.http.get<any>(this.url+'/'+catid);
  }
  editCat(cat:Cat)
  {
    return this.http.put<any>(this.url+'/'+cat.id, cat);
  }
  deleteCat(catid: number)
  {
    return this.http.delete(this.url+'/'+catid);
  }

}
