import { Player } from "./player";

export class Team {

  score: number = 0;

  constructor(public name: string){}

  addToScore(num: number){
    this.score += num;
  }
}
