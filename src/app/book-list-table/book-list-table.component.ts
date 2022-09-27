import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timeInterval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookListAddComponent } from '../book-list-add/book-list-add.component';

@Component({
  selector: 'app-book-list-table',
  templateUrl: './book-list-table.component.html',
  styleUrls: ['./book-list-table.component.scss']
})
export class BookListTableComponent implements OnInit {

  constructor(private http : HttpClient,private route : Router) { }

  data : any;

  populateList() {
    this.http.get(environment.API_URL + "Books").subscribe((res :any) => {this.data = res} )
  }

  ngOnInit(): void {
    this.populateList();
  }

    deleteBook(id : number) {
    let test : any;
    this.http.delete(environment.API_URL + "Books/"+ id).subscribe((res: any ) => {this.populateList()});
    
  }

}
