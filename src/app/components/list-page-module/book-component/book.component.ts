import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
list = [1,2];
slides = [1,1,1,1,1,1,1,1,1,1,1,11,1,1,1]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  slideConfig = {
    "slidesToShow": 6, 
    "slidesToScroll": 3,
    "autoplay": false,
    "infinite": false,
};

getCss(index){
    if(index == 0)
    return 'card selected-date'

    else{
      return  'card book-date'
    }


}

    naviagte(){
            this.router.navigate(['/list-checkout']);
    }



}


