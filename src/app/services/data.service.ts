import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURI = environment.API_URL
  endpoint = "Books"
  constructor(private http : HttpClient) { }

  public getData() : Observable<Object> {
    return this.http.get(this.apiURI + this.endpoint, {})
  }

  public getBookData(id : any) : Observable<Object> {
    return this.http.get(this.apiURI + this.endpoint +"/" + id)
  }
}
