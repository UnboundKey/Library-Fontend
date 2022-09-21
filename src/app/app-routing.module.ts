import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';

const routes: Routes = [
  {path:'', component:BookListComponent},
  {path:'books/:id', component:BookDetailsComponent},
  {path:'series/:id', component:SeriesDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
