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
    review: "",
};

  ngOnInit(): void {
    this.PopulateList();
    // this.form = this.dataObj;
  }

  save() {
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json; charset=utf-8')
    this.http.put(environment.API_URL + "Books/" + this.dataObj.id, this.dataObj, {headers}).subscribe((res :any) => {console.log(res)});
    this.route.navigate(["books/manage"]);
  }


}
