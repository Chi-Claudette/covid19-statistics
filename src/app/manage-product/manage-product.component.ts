import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  products: any[]= [];

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(res =>
    {
      this.products= res;
    })

  }

}
