import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


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


  dynamicSlides = [
    {
      id: 1,
      src:'assets/img/gwn.png',
      alt:'Side 1',
      title:'cat 1'
    },
    {
      id: 2,
      src:'assets/img/jwr.jpg',
      alt:'Side 2',
      title:'cat 2'
    },
    {
      id: 3,
      src:'assets/img/org.jfif',
      alt:'Side 3',
      title:'cat 3'
    },
    {
      id: 3,
      src:'assets/img/ct.jpg',
      alt:'Side 3',
      title:'cat 4'
    },
    {
      id: 3,
      src:'assets/img/bg6.jpg',
      alt:'Side 3',
      title:'cat 6'
    },
    {
      id: 3,
      src:'assets/img/bg4.jpg',
      alt:'Side 3',
      title:'cat 7'
    },
    {
      id: 3,
      src:'https://via.placeholder.com/600/24f355',
      alt:'Side 3',
      title:'cat 8'
    },
    {
      id: 4,
      src:'https://via.placeholder.com/600/d32776',
      alt:'Side 4',
      title:'cat 9'
    },
    {
      id: 5,
      src:'https://via.placeholder.com/600/f66b97',
      alt:'Side 5',
      title:'cat 10'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {

  }


}
