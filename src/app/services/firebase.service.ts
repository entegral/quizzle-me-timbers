import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Team } from '../models/team';
import { Game } from '../models/game';

@Injectable()
export class FirebaseService {

  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.games = this.database.list('games');
  }

  addGame(game: Game){
    let newGame = this.games.push(game);
    return newGame.key;
  }

  getGameByID(key: string){
    return this.database.object(`games/${key}`);
  }



}
