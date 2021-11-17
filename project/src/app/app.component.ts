import {Component, OnInit} from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data:any;
  countries:any[]=[];
  countryName:string='';
  result= false;
  constructor( private postsServe: PostsService) {
  }
  ngOnInit(): void {
    this.postsServe.getData().subscribe(response =>
    {
      this.data =response;
      this.countries=this.data.Countries;
      console.log(response);
    })
  }
  filt()
  {
    this.result=true;
  }


}
