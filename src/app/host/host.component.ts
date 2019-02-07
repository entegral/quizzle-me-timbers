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

  // Question related variables and observables
  upcomingQuestions = [];
  displayQuestions: Observable<any[]>;

  // Game related variables and observables
  currentGame: Observable<any> = null;
  newGameTitle: string;
  gameId: string;

  // HTML displaying variables
  showCurrentGame: boolean = false;
  showHostView: boolean = false;
  showGameSetUp: boolean = true;
  displayQuestionCards: boolean = false;


  constructor(public fb: FirebaseService, public authService: AuthenticationService, public router: Router, public api: ApiService) {
  }

   scrubQuestion(question){
     console.log("scrubbing question:", question.question);
     let cleanString1: string = question.question;
     let cleanString2: string;
     let cleanString3: string;
     let cleanString4: string;
     let doubleQuote = "&quot;"
     let singleQuote = "&#039;"
     cleanString1 = question.question.replace(doubleQuote, '"');
     cleanString2 = cleanString1.replace(doubleQuote, '"');
     cleanString3 = cleanString2.replace(singleQuote, "'");
     cleanString4 = cleanString3.replace(singleQuote, "'");
     return cleanString4;
   }

  ngOnInit() {
    this.api.clueList.subscribe((response) => {
      this.upcomingQuestions = response.results.map(question => {
        return { ...question, question: this.scrubQuestion(question)}
      });


    });
  }

  addToQuestionList(question) {
    this.fb.addDisplayQuestionToList(this.gameId, question);
    this.deleteQuestion(question);
  }

  deleteQuestion(question){
    delete this.upcomingQuestions[this.upcomingQuestions.indexOf(question)];
  }


  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

  loadGame(){
    this.fb.setGameById(this.newGameTitle);
    this.currentGame = this.fb.initComponentWithGameObservable();
    this.displayQuestions = this.fb.displayQuestions;
    this.gameId = this.newGameTitle;
    this.toggleShowCurrentGame();
    this.toggleShowHostView();
    this.toggleShowGameSetUp();
  }

  toggleShowCurrentGame(){
    this.showCurrentGame = ! this.showCurrentGame;
  }

  toggleShowHostView(){
    this.showHostView = ! this.showHostView;
  }

  toggleShowGameSetUp(){
    this.showGameSetUp = ! this.showGameSetUp;
  }

  startNewGame(){
    this.gameId = this.fb.addGame(this.newGameTitle);
    this.fb.setGameById(this.gameId);
    this.currentGame = this.fb.initComponentWithGameObservable();
    this.displayQuestions = this.fb.displayQuestions;
    this.toggleShowCurrentGame();
    this.toggleShowHostView();
    this.toggleShowGameSetUp();

  }


}
