import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { BookListTableComponent } from './book-list-table/book-list-table.component';
import { BookListAddComponent } from './book-list-add/book-list-add.component';

import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    SeriesDetailsComponent,
    BookListTableComponent,
    BookListAddComponent,
    ProductEditComponent,
    BookCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
