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
  newGameId: string;
  showCurrentGame: boolean = false;

  constructor(public fb: FirebaseService, public authService: AuthenticationService, public router: Router) {
    console.log('authService.user = ', this.authService.user);
    this.authService.user
   }

  ngOnInit() {
  }


  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

  loadGame(key: string){
    this.currentGame = this.fb.getGameByID(key);
  }

  toggleShowCurrentGame(){
    this.showCurrentGame = ! this.showCurrentGame;
  }

  startNewGame(){
    let newGame = new Game(this.newGameTitle);
    let newGameId = this.fb.addGame(newGame);
    this.currentGame = this.fb.getGameByID(newGameId);
    this.toggleShowCurrentGame();
  }


}
