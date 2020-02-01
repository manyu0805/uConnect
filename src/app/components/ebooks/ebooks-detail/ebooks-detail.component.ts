import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ebooks-detail',
  templateUrl: './ebooks-detail.component.html',
  styleUrls: ['./ebooks-detail.component.css']
})
export class EbooksDetailComponent implements OnInit {

  constructor(private router: Router) { }
  books = [1,1,1,1,1,1,11,1,1,,11,1,1,1,1,1,1,1
  ];

  ngOnInit() {
  }

  slideConfig1 = {
    "slidesToShow": 7 , 
    "slidesToScroll": 3,
    "autoplay": false,
    "autoplaySpeed": 5000
    };

    onClick(){
      this.router.navigate(['/list-checkout'])
    }

}
