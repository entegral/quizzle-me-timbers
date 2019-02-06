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

  clues: Observable<any>;
  currentGame: Observable<any> = null;
  newGameTitle: string;
  gameId: string;
  showCurrentGame: boolean = false;
  showHostView: boolean = false;
  showGameSetUp: boolean = true;

  displayQuestionCards: boolean = false;


  constructor(public fb: FirebaseService, public authService: AuthenticationService, public router: Router) {
   }

  ngOnInit() {
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

  toggleShowHostView(){
    this.showHostView = ! this.showHostView;
  }

  toggleShowGameSetUp(){
    this.showGameSetUp = ! this.showGameSetUp;
  }

  startNewGame(){
    this.gameId = this.fb.addGame(this.newGameTitle);
    this.fb.setGameById(this.gameId);
    this.toggleShowCurrentGame();
    this.toggleShowHostView();
    this.toggleShowGameSetUp();
    this.currentGame = this.fb.initComponentWithGameObservable();

  }


}
