import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebooks-homepage',
  templateUrl: './ebooks-homepage.component.html',
  styleUrls: ['./ebooks-homepage.component.css']
})
export class EbooksHomepageComponent implements OnInit {
  slides = [
    {img: "/assets/images/13_inr.jpg"},
    {img: "/assets/images/1_inr.jpg"},
    {img: "/assets/images/31_inr.jpg"},
    {img: "/assets/images/14_inr.jpg"},
    ];
    books = [1,1,1,1,1,1,11,1,1,,11,1,1,1,1,1,1,1
      ];
  constructor() { }

  ngOnInit() {
  }
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 3000
    };
  
    slideConfig1 = {
      "slidesToShow": 5 , 
      "slidesToScroll": 3,
      "autoplay": false,
      "autoplaySpeed": 5000
      };

}
