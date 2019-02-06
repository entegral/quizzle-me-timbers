import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Team } from '../models/team';
import { Game } from '../models/game';

@Injectable()
export class FirebaseService {

  games: FirebaseListObservable<any[]>;
  teams: FirebaseListObservable<any[]>;
  answeredQuestions: FirebaseListObservable<any[]>;
  localTeams: string[] = [];

  game: FirebaseObjectObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.games = this.database.list('games');
    this.teams = this.database.list('teams');
    this.answeredQuestions = this.database.list('games/answered');
  }

  addGame(title: string) {
    console.log('title ', title);
    let newGame = new Game(title);
    let dbGame = this.games.push(newGame);
    this.setGameById(dbGame.key);
    return dbGame.key;
  }

  addTeam(gameId: string, team: Team) {
    let newTeam = this.teams.push(team);
    this.localTeams.push(newTeam.key);
    console.log('pushed to local team ', this.localTeams);
    console.log('pushed to fb team list ', this.teams);
    this.updateGameRoster(gameId);
    return newTeam.key;
  }

  getTeamById(key: string) {
    let result = this.database.object(`teams/${key}`);
    console.log('team returned = ', result);
    return result;
  }

  getTeamByName(name: string) {
    let result = this.database.object(`teams/*/${name}`);
    console.log('team returned = ', result);
    return result;

  }

  updateGameRoster(gameId: string) {
    let gameDbCon = this.getGameById(gameId);
    gameDbCon.update({ teams: this.localTeams });
  }

  initComponentWithGameObservable() {
    if (this.game) {
      return this.game;
    }
    else {
      return null;
    }
  }

  setGameById(key: string) {
    this.game = this.database.object(`games/${key}`);
  }

  getGameById(key: string) {
    return this.database.object(`games/${key}`);
  }

}
