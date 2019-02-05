import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Team } from '../models/team';
import { Game } from '../models/game';

@Injectable()
export class FirebaseService {

  games: FirebaseListObservable<any[]>;
  game: FirebaseObjectObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.games = this.database.list('games');
  }

  addGame(game: Game){
    let newGame = this.games.push(game);
    this.setGameById(newGame.key);
    return newGame.key;
  }

  initGameObservable(){
    if (this.game){
      return this.game;
    }
    else {
      return null;
    }
  }

  setGameById(key: string){
    this.game = this.database.object(`games/${key}`);
  }



}
