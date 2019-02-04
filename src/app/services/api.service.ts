import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, observeOn } from 'rxjs/operators';
import { FirebaseListObservable } from 'angularfire2/database';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class ApiService {
  randomMethod: string;
  clueMethod: string;
  clueList: Observable<any>;
  // public triviaInfo: Observable<>

  constructor(private http: HttpClient) {
    this.randomMethod = 'http://jservice.io/api/random';
    this.clueMethod = 'http://jservice.io/api/clues?category=306';
    this.clueList = this.categoryQuestion()
  }

  randomQuestion(){
  let resp = this.http.get(this.randomMethod);
  resp.subscribe((response) => {
    return response[0];
  });
  }

  categoryQuestion() {
      return this.http.get(this.clueMethod);
  }



}
