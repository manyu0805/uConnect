import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListPageComponent} from './list-page.component'
import { ListDetailComponent } from './list-detail-component/list-detail.component';
import { ListPageRouterModule } from './list-page-routing.module';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book-component/book.component';


@NgModule({
  declarations: [
    ListPageComponent,
    ListDetailComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    ListPageRouterModule
  ],
  providers: [],
  bootstrap: []
})
export class ListPageModule { }
