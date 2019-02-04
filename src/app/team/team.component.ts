import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
showTeamView: boolean = false;
showTeamName: boolean = true;
  constructor() { }

  ngOnInit() {
  }


  toggleTeamView(){
    this.showTeamView = !this.showTeamView;
    this.showTeamName = !this.showTeamName;
  }

}
