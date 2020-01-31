import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
})
export class UserDashboardComponent implements OnInit {
list = [1,2];
slides = ['assets/images/download.png', 'assets/images/blog/post-4.jpg', 'assets/images/blog/post-4.jpg','assets/images/blog/post-4.jpg', 'assets/images/download.png']
  constructor() { }

  ngOnInit() {
  }
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 2000};

}
