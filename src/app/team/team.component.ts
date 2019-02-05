import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamNameSelected: boolean = false;
  teamName: string;

  memberEmail: string = '';
  memberName: string = '';
  memberList: Player[] = [];


  constructor() { }

  ngOnInit() {
  }

  toggleEditTeamName(){
    this.teamNameSelected = !this.teamNameSelected;
  }

  addMemberToList(){
    this.memberList.push(new Player(this.memberName, this.memberEmail));
    console.log(this.memberList);
  }

  removeMemberFromList(member: Player){
    const index: number = this.memberList.indexOf(member);
    this.memberList.splice(index, 1);

  }

}
