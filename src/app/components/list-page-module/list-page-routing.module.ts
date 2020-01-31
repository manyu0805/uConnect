import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page.component';
import { ListDetailComponent } from './list-detail-component/list-detail.component';
import { BookComponent } from './book-component/book.component';
import { ConfirmationListComponent } from '../confirmation-component/confirmation-book-list.component';


const routes: Routes = [
  { path: ':id', component: ListPageComponent,
    children: [
        {path: 'list-detail', component: ListDetailComponent},
        {path: 'book', component: BookComponent}
    ] },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ListPageRouterModule {}