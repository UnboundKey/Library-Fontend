import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  data : any;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
   this.dataService.getData().subscribe((response) => {
    this.data = response
   })
  }

}
