import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  style = 'hero-area bg-1 text-center overly'
  jobList = [
    {
      name: "MENTORS",
      jobs: ['Agriculture', 'Information Technology', 'Mechanical', 'Aeronautical'],
      link: 'listing',
      css: "fa fa-laptop icon-bg-6"
    },
    {
      name: "TRAININGS & COURSES",
      jobs: ['International Seminars', 'National Seminars',
       'Inter-College Seminar', 'College Training'],
       link: 'blog-list',
       css: "fa fa-laptop icon-bg-4"
    },
    
    {
      name: "Workshop & EVENTS",
      jobs: ['Goverment', 'College', 'Workshop', 'Seminars'],
      link: 'blog-list',
      css: "fa fa-laptop icon-bg-2"
    },
    {
      name: "ONLINE STORE",
      jobs: ['E-Books'],
      link: 'listing',
      css: "fa fa-laptop icon-bg-3"
    },
    {
      name: "JOBS & INTERNSHIP",
      jobs: ['Goverment', 'Information Technology', 'BPO', 'Consultant'],
      link: 'listing',
      css: "fa fa-laptop icon-bg-1"
    },
     
    
  ]
  slides = ['assets/images/download.png', 'assets/images/blog/post-4.jpg', 'assets/images/blog/post-4.jpg','assets/images/blog/post-4.jpg', 'assets/images/download.png']
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let i = 1
    setTimeout(()=>{  
      i++  //<<<---    using ()=> syntax
      this.style = 'hero-area bg-'+{i} +'text-center overly';
      i++
      }, 3000);
  }

  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 2000};

  sliderCon = {
    "slidesToShow": 3, 
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "centerMode": true,
  "centerPadding": '60px',
  "responsive": [
    {
      "breakpoint": 768,
      "settings": {
        "arrows": false,
        "centerMode": true,
        "centerPadding": '40px',
        "slidesToShow": 3
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "arrows": false,
        "centerMode": true,
        "centerPadding": '40px',
        "slidesToShow": 1
      }
    }
  ]
  }

  onClick(){
    this.router.navigate(['/listing']);
  }

  afterChange(EVENTS){

  }

  getstyle(){
    return this.style
  }


}
