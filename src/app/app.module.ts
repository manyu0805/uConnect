import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListingComponent } from './components/listing/listing.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListingComponent,
    TopMenuComponent,
    FooterComponent,
    ServicesComponent,
    ListPageComponent,
    SearchBarComponent,
    AboutUsComponent,
    BlogPostComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
