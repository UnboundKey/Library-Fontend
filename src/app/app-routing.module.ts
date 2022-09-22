import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListAddComponent } from './book-list-add/book-list-add.component';
import { BookListTableComponent } from './book-list-table/book-list-table.component';
import { BookListComponent } from './book-list/book-list.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';

const routes: Routes = [
  {path:'books', component:BookListComponent, pathMatch: 'full'},
  {path:'books/manage', component:BookListTableComponent},
  {path:'books/manage/create', component:BookListAddComponent},
  {path:'books/:id', component:BookDetailsComponent},
  {path:'series/:id', component:SeriesDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
