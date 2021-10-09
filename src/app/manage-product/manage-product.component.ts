import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../shared/category.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  products: any[]= [];
  cats:any[]= [];
  customOptions:OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ["<<",">>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 6
      }
    },
    nav: true
  }

  constructor(private ps: ProductService, private cs: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.cs.getCat().subscribe(res =>
    {
      this.cats= res;
    });

    this.ps.getProducts().subscribe(res =>
    {
      this.products= res;
    })

  }
  edit(id: number)
  {
    this.router.navigate(['/mp',id]);
  }
  delete(id: number)
  {
    this.ps.deleteProduct(id).subscribe(res =>
    {
      console.log(res);
    })
  }

  disp(catid:number)
  {

  }

}
