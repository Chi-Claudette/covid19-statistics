import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../shared/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {
  cats: any[] =[];
  error:any= null;
  deleteError:any= null;
  success:any= false;
  isloading:any= false;

  constructor(private cs: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.isloading= true;
    this.cs.getCat().subscribe(res =>
    {
      this.cats= res;
      this.isloading= false;
    },
      errorMessage =>
      {
        console.log(errorMessage);
        this.error= errorMessage;
        this.isloading=false;
      }
      );

  }
  edit(id: number)
  {
    this.router.navigate(['/mc', id]);
  }

  delete(id: number)
  {
    this.cs.deleteCat(id).subscribe(res =>
    {
      console.log(id);
      alert("category successfully deleted!");
    },
      errorMessage =>
      {
        console.log(errorMessage);
        alert(errorMessage.statusText);
      }
      );

  }



}
