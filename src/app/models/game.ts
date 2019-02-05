import { Team } from "./team";

export class Game {

  answeredQuestions: Object[] = [];
  upcomingQuestions: Object[] = [];
  teams: Team[] = [];

  constructor(public title: string){}

  addTeamsToGame(roster: Team[]){
    roster.forEach((each) => {
      this.teams.push(each);
    });
  }

  addTeam(team: Team){
    this.teams.push(team);
  }

}
