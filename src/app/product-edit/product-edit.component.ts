import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  bookId : any;
  getRequest : any;
  constructor(private http:HttpClient, private route : Router, private activatedRoute : ActivatedRoute) { }

  dataObj : any = []

  PopulateList() {
    this.bookId = this.activatedRoute.snapshot.params["id"];
     var getRequest = this.http.get(environment.API_URL + "Books/"+ this.bookId).subscribe(o => {
      this.dataObj = o;
    })
  }
  form : any  = {
    title: this.dataObj.title,
    original_title: this.dataObj,
    description: this.dataObj.description,
    short_description: this.dataObj.short_description,
    coverImg: this.dataObj.coverImg,
    author: this.dataObj.author,
    author_romanized: this.dataObj.author_romanized,
    isbn: this.dataObj.isbn,
    firstPrinted: this.dataObj.firstPrinted,
    printing: this.dataObj.printing,
    genre: this.dataObj.genre,
    language: this.dataObj.language,
    bookType: this.dataObj.bookType,
    review: this.dataObj.review,
    series: [],
};

  ngOnInit(): void {
    this.PopulateList();
    // this.form = this.dataObj;
  }

  save() {
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json; charset=utf-8')
    //TODO make reflect data from server, unless null then this is a good replacement
    this.dataObj.series = [];
    this.http.put(environment.API_URL + "Books/" + this.dataObj.id, this.dataObj, {headers}).subscribe((res :any) => {console.log(res)});
    this.route.navigate(["books/manage"]);
  }


}
