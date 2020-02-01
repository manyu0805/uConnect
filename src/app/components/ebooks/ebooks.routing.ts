import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationListComponent } from '../confirmation-component/confirmation-book-list.component';
import { EbooksHomepageComponent } from './ebooks-homepage/ebooks-homepage.component';
import { EbooksDetailComponent } from './ebooks-detail/ebooks-detail.component';


const routes: Routes = [
    {path: '', component: EbooksHomepageComponent},
  { path: ':id',
    children: [
        {path: 'ebook-detail', component: EbooksDetailComponent}
        // {path: 'book', component: BookComponent}
    ] },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EBooksRouterModule {}