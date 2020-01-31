import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { ListingComponent } from './components/listing/listing.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListPageComponent } from './components/list-page-module/list-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { PartnerConfigurationComponent } from './components/partner-configuration/partner-configuration.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'partner-profile',
    component: PartnerConfigurationComponent,
    pathMatch: 'full'
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'listing',
    component: ListingComponent
  },
  {
    path: 'list-page',
    loadChildren: './components/list-page-module/list-page.module#ListPageModule'
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'blog-post',
    component: BlogPostComponent
  },
  {
    path: 'blog-list',
    component: BlogListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
