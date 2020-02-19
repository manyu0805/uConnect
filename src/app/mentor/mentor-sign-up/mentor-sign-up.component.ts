import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentor-sign-up',
  templateUrl: './mentor-sign-up.component.html',
  styleUrls: ['./mentor-sign-up.component.css']
})
export class MentorSignUpComponent implements OnInit {
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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSumbit(){
    this.router.navigate(['/1/dashboard'])
  }

}
