import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html'
})
export class MentorDashboardComponent implements OnInit {
    showNav: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  click(){
    this.showNav = !this.showNav;
  }

  showSlider(){
      if(this.showNav){
          return 'sidebarToggle'
      }
      return 'sidebarToggleAfter'
  }

}
