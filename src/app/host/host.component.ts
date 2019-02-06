import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../services/api.service';
import { FirebaseService } from '../services/firebase.service';
import { Game } from '../models/game';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  providers: [AuthenticationService, ApiService]
})
export class HostComponent implements OnInit {

  upcomingQuestions: Object[] = [];
  displayQuestions: Object[] = [];
  currentGame: Observable<any> = null;
  newGameTitle: string;
  gameId: string;
  showCurrentGame: boolean = false;

  displayQuestionCards: boolean = false;


  constructor(public fb: FirebaseService, public authService: AuthenticationService, public router: Router, public api: ApiService) {
   }

  ngOnInit() {
    this.api.clueList.subscribe((response) => {
      this.upcomingQuestions = response;
    });
  }

  addToQuestionList(question) {
    // let index = null;
    // this.displayQuestions.push(question);
    // index = this.upcomingQuestions.indexOf(question);
    // delete this.upcomingQuestions[index];
    // console.log(index, this.displayQuestions);
    this.fb.addDisplayQuestionToList(this.gameId, question);
  }

  deleteQuestion(question){

  }


  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

  loadGame(key: string){
    this.fb.setGameById(key);
    this.currentGame = this.fb.initComponentWithGameObservable();

  }

  toggleShowCurrentGame(){
    this.showCurrentGame = ! this.showCurrentGame;
  }

  startNewGame(){
    this.gameId = this.fb.addGame(this.newGameTitle);
    this.fb.setGameById(this.gameId);
    this.toggleShowCurrentGame();
    this.currentGame = this.fb.initComponentWithGameObservable();

  }


}
