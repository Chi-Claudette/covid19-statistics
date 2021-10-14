import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {ProductService} from "../shared/product.service";
import {CategoryService} from "../shared/category.service";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
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
  cats: any[]= [];
  prods: any[]= [];

  constructor(private ps: ProductService, private cs: CategoryService) {
  }

  ngOnInit(): void {
    this.cs.getCat().subscribe(res =>
    {
      this.cats= res;
      console.log(this.cats);
    });

    this.ps.getProducts().subscribe(res =>
    {
      this.prods= res;
      console.log(this.prods);
    })

  }


}
