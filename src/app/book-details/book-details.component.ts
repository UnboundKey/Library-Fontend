import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  data : any;
  constructor(private dataService : DataService, private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.dataService.getBookData(id).subscribe((response) => {
      this.data = response;
     })
  }

}
