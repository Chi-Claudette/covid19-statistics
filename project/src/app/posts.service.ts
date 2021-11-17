import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url= 'https://api.covid19api.com/summary';
  constructor(private http: HttpClient) { }

  getData()
  {
    return this.http.get('https://api.covid19api.com/summary');
  }
}
