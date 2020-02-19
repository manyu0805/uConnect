import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListingComponent } from './components/listing/listing.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { SlickModule } from 'ngx-slick';
import { PartnerConfigurationComponent } from './components/partner-configuration/partner-configuration.component';
import { ListPageModule } from './components/list-page-module/list-page.module';
import { ConfirmationListComponent } from './components/confirmation-component/confirmation-book-list.component';
import { ListCheckoutComponent } from './components/checkout-pages/list-checkout-pages/list-checkout.component';
import {  UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.componet';
import { MentorModule } from './mentor/mentor.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListingComponent,
    TopMenuComponent,
    FooterComponent,
    ServicesComponent,
    SearchBarComponent,
    AboutUsComponent,
    BlogPostComponent,
    BlogListComponent,
    ListCheckoutComponent,
    PartnerConfigurationComponent,
    ConfirmationListComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MentorModule,
    SlickModule.forRoot()
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
