import { Player } from "./player";

export class Team {

  score: number = 0;

  constructor(public name: string, public players: Player[]){}

  addPlayerTo(player: Player){
    this.players.push(player);
  }

  addToScore(num: number){
    this.score += num;
  }
}
