import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  list = [1,2,3,4,6]
  jobList = [
    {
      name: "MENTORS",
      jobs: ['Agriculture', 'Information Technology', 'Mechanical', 'Aeronautical'],
      link: 'listing',
      css: "fa fa-laptop icon-bg-6"
    },
    {
      name: "JOBS & INTERNSHIP",
      jobs: ['Goverment', 'Information Technology', 'BPO', 'Consultant'],
      link: 'listing',
      css: "fa fa-laptop icon-bg-1"
    },
    {
      name: "EVENTS & FESTS",
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
      name: "TRAININGS & SEMINARS",
      jobs: ['International Seminars', 'National Seminars',
       'Inter-College Seminar', 'College Training'],
       link: 'blog-list',
       css: "fa fa-laptop icon-bg-4"
    },
    {
      name: "EDUCATIONAL & INDUSTRIAL TOUR",
      jobs: ['Education Tour', 'Industrial Tour', 'Conference Toure', 'Worskhop'],
      link: 'blog-list',
      css: "fa fa-laptop icon-bg-5"
    },
  ]
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  getlink(link){
    console.log(link)
    this.router.navigate([link])
  }

}
