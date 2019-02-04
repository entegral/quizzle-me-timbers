import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  providers: [AuthenticationService]
})
export class HostComponent implements OnInit {

  clues: Observable<any>;

  constructor(public authService: AuthenticationService, public router: Router) {

   }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

  removeClue(clue){

  }

}
