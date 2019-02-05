import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { FirebaseService } from '../services/firebase.service';
import { Game } from '../models/game';
import { Team } from '../models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamNameSelected: boolean = false;
  teamName: string;
  currentTeam: Team;

  memberEmail: string = '';
  memberName: string = '';
  memberList: Player[] = [];

  currentGame: Game;
  displayGameView: boolean = false;

  constructor(public fb: FirebaseService) {
    // this.currentGame = this.fb.getCurrentGame();
  }

  ngOnInit() {
  }

  addTeamToGame(){
    this.currentTeam = new Team(this.teamName, this.memberList);
    this.currentGame.addTeam(this.currentTeam);
  }

  toggleEditTeamName(){
    this.teamNameSelected = !this.teamNameSelected;
  }

  addMemberToList(){
    this.memberList.push(new Player(this.memberName, this.memberEmail));
    console.log(this.memberList);
    this.memberEmail = '';
    this.memberName = '';
  }

  removeMemberFromList(member: Player){
    const index: number = this.memberList.indexOf(member);
    this.memberList.splice(index, 1);
  }

  showGameView(){
    this.displayGameView = true;
  }

}
