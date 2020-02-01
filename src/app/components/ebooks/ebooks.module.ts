import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbooksListingComponent } from './ebooks-listing/ebooks-listing.component';
import { EbooksDetailComponent } from './ebooks-detail/ebooks-detail.component';
import { EbooksHomepageComponent } from './ebooks-homepage/ebooks-homepage.component';
import { EBooksRouterModule } from './ebooks.routing';
import { SlickModule } from 'ngx-slick';



@NgModule({
  declarations: [
    EbooksListingComponent, 
    EbooksDetailComponent,
    EbooksHomepageComponent
  ],
  imports: [
    CommonModule,
    EBooksRouterModule,
    SlickModule.forRoot()
  ]
})
export class EbooksModule { }
