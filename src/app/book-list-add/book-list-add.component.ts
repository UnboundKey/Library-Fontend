import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BookListTableComponent } from '../book-list-table/book-list-table.component';

@Component({
  selector: 'app-book-list-add',
  templateUrl: './book-list-add.component.html',
  styleUrls: ['./book-list-add.component.scss']
})
export class BookListAddComponent implements OnInit {
  
  constructor(private http:HttpClient, private route : Router) { }
  postresult = ""

  dataObj : any = []

  form : any  = {
    title: "",
    original_title: "",
    description: "",
    short_description: "",
    coverImg: "",
    author: "",
    author_romanized: "",
    isbn: "",
    firstPrinted: "",
    printing: "",
    genre: "",
    language: "",
    bookType: "",
    "review": "",
};
   PopulateList() {
    this.http.get(environment.API_URL + "Books").subscribe(o => {
      this.dataObj = o;
    })
  }

  ngOnInit(): void {

  }


  save() {
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json; charset=utf-8')
    this.http.post(environment.API_URL + "Books", this.form, {headers}).subscribe((res :any) => {console.log(res)});
    this.route.navigate(["manage"]);
  }

}
