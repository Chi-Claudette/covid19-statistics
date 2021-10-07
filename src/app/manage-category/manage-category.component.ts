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

  constructor(private cs: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.cs.getCat().subscribe(res =>
    {
      this.cats= res;
    });

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
    });

  }



}
