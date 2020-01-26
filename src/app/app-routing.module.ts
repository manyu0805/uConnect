import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ListingComponent } from './listing/listing.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListPageComponent } from './list-page/list-page.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
