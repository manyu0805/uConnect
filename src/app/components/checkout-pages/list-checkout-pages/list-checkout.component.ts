import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-checkout',
  templateUrl: './list-checkout.component.html',
})
export class ListCheckoutComponent implements OnInit {
list = [1,2];
slides = ['assets/images/download.png', 'assets/images/blog/post-4.jpg', 'assets/images/blog/post-4.jpg','assets/images/blog/post-4.jpg', 'assets/images/download.png']
  constructor(private router: Router) { }

  ngOnInit() {
  }
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 2000
  };

  submit(){
    this.router.navigate(['/confirm/book'])
  }

}
