import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  list = [1,1,1,1,1,1,1,1]
  constructor() { }

  ngOnInit() {
  }

}
