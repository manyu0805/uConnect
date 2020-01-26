import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { ListingComponent } from './components/listing/listing.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
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
    component: ListPageComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
