import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class ApiService {
  clueList: Observable<any>;

  constructor(private http: HttpClient) {
    this.clueList = this.http.get('http://jservice.io/api/clues?category=306');
  }
}
