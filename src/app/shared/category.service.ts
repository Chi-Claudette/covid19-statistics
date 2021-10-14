import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cat} from "./cat";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  eventEmitter = new EventEmitter<string>();
  private url: string = "http://localhost:8080/api/categories";

  constructor(private http: HttpClient) {

  }

  getCat() {
    return this.http.get<any>("http://localhost:8080/api/categories");
  }

  createCat(cat: Cat) {
    return this.http.post<any>(this.url, cat);
  }

  editCat(catId: number, cat: Cat) {
    return this.http.put(this.url + "/" + catId, cat);

  }

  deleteCat(id: number) {
    return this.http.delete(this.url + "/" + id);

  }

  getACat(catId: number) {

    return this.http.get((this.url + '/' + catId));
  }
}
