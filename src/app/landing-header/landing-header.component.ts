import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})
export class LandingHeaderComponent implements OnInit {
  resultH = "";

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.ps.eventEmitter.emit(this.resultH);
  }

}
